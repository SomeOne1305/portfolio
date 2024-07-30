import { useSnakeGameStore } from '@/stores/useSnakeGameStore'
import { useCallback, useEffect, useState } from 'react'

const BOARD_SIZE = 20
const INITIAL_SNAKE = Array.from({ length: 5 }, (_, i) => ({
	x: 10,
	y: 10 - i,
}))
const INITIAL_DIRECTION = { x: 0, y: 1 }
const INITIAL_SPEED = 200
const APPLE_LIMIT = 10

type Position = { x: number; y: number }

const getRandomPosition = (): Position => {
	return {
		x: Math.floor(Math.random() * BOARD_SIZE),
		y: Math.floor(Math.random() * BOARD_SIZE),
	}
}

export default function useSnakeGame() {
	const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
	const [food, setFood] = useState<Position>(getRandomPosition())
	const [direction, setDirection] = useState(INITIAL_DIRECTION)
	const [speed, setSpeed] = useState(INITIAL_SPEED)
	const [gameOver, setGameOver] = useState(false)
	const [paused, setPaused] = useState(true)
	const [gameStarted, setGameStarted] = useState(false)
	const { collectedApples, setCollectedApples } = useSnakeGameStore()
	const [clickPlay, setClickPlay] = useState<HTMLAudioElement | null>(null)

	const playAudio = useCallback(() => {
		if (!clickPlay) {
			const audio = new Audio('/music_food.mp3')
			setClickPlay(audio)
			audio.play()
		} else {
			clickPlay.play()
		}
	}, [clickPlay])

	const moveSnake = useCallback(() => {
		setSnake(prevSnake => {
			const newSnake = [...prevSnake]
			const head = { ...newSnake[0] }

			head.x += direction.x
			head.y += direction.y

			if (
				head.x < 0 ||
				head.x >= BOARD_SIZE ||
				head.y < 0 ||
				head.y >= BOARD_SIZE ||
				newSnake.some(segment => segment.x === head.x && segment.y === head.y)
			) {
				setGameOver(true)
				return prevSnake
			}

			newSnake.unshift(head)

			if (head.x === food.x && head.y === food.y) {
				setFood(getRandomPosition())
				const newCollectedApples = collectedApples + 1
				setCollectedApples(newCollectedApples)
				playAudio()
				if (newCollectedApples >= APPLE_LIMIT) {
					setGameOver(true)
				}
				setSpeed(prevSpeed => Math.max(prevSpeed - 10, 50))
			} else {
				newSnake.pop()
			}

			return newSnake
		})
	}, [direction, food, playAudio, collectedApples, setCollectedApples])

	useEffect(() => {
		if (gameOver || paused || !gameStarted) {
			return
		}
		const intervalId = setInterval(moveSnake, speed)
		return () => clearInterval(intervalId)
	}, [moveSnake, speed, gameOver, paused, gameStarted])

	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowUp':
					if (direction.y !== 1) setDirection({ x: 0, y: -1 })
					break
				case 'ArrowDown':
					if (direction.y !== -1) setDirection({ x: 0, y: 1 })
					break
				case 'ArrowLeft':
					if (direction.x !== 1) setDirection({ x: -1, y: 0 })
					break
				case 'ArrowRight':
					if (direction.x !== -1) setDirection({ x: 1, y: 0 })
					break
			}
		}

		window.addEventListener('keydown', handleKeydown)
		return () => window.removeEventListener('keydown', handleKeydown)
	}, [direction])

	const startGame = useCallback(() => {
		setPaused(false)
		setGameStarted(true)
		resetGame()
	}, [])

	const resetGame = useCallback(() => {
		setSnake(INITIAL_SNAKE)
		setFood(getRandomPosition())
		setDirection(INITIAL_DIRECTION)
		setSpeed(INITIAL_SPEED)
		setGameOver(false)
		setCollectedApples(0)
		setPaused(false)
		setGameStarted(true)
	}, [setCollectedApples])

	const pauseGame = useCallback(() => {
		setPaused(true)
	}, [])

	return {
		snake,
		food,
		gameOver,
		startGame,
		resetGame,
		applesCollected: collectedApples,
		paused,
		pauseGame,
	}
}
