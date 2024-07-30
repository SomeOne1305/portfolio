'use client'
import { useSnakeGame } from '@/hooks'
import React, { memo } from 'react'

type TypeSnakeCellProps = {
	isSnake: boolean
	isTail: boolean
	isFood: boolean
}

const SnakeCell = memo<TypeSnakeCellProps>(({ isSnake, isTail, isFood }) => (
	<div
		className={`w-full h-full ${
			isSnake
				? 'bg-[#43D9AD]'
				: isFood
				? 'rounded-full bg-[#43D9AD] shadow-custom'
				: 'bg-primary'
		} ${isTail ? 'bg-gradient-to-br from-[#43D9AD]' : ''}`}
	/>
))

SnakeCell.displayName = 'SnakeCell'

const SnakeGame: React.FC = () => {
	const {
		snake,
		food,
		startGame,
		resetGame,
		paused,
		gameOver,
		applesCollected,
	} = useSnakeGame()

	const renderGrid = () => {
		return Array.from({ length: 20 }).map((_, row) =>
			Array.from({ length: 20 }).map((_, col) => {
				const isSnake = snake.some(
					segment => segment.x === col && segment.y === row
				)
				const isTail =
					snake[snake.length - 1]?.x === col &&
					snake[snake.length - 1]?.y === row
				const isFood = food.x === col && food.y === row
				return (
					<SnakeCell
						key={`${row}-${col}`}
						isSnake={isSnake}
						isTail={isTail}
						isFood={isFood}
					/>
				)
			})
		)
	}

	return (
		<div className='flex flex-col items-center relative'>
			<div
				className='grid w-80 h-96 bg-primary rounded-lg p-2 overflow-hidden'
				style={{
					gridTemplateColumns: 'repeat(20, minmax(0, 1fr))',
					gridTemplateRows: 'repeat(21, minmax(0, 1fr))',
				}}
			>
				{renderGrid()}
			</div>
			{!gameOver && paused && (
				<div className='absolute pb-6 text-center w-full bottom-0 left-0 z-[5]'>
					<button
						className='px-3 py-2 rounded-lg bg-orange-400'
						onClick={startGame}
					>
						start-game
					</button>
				</div>
			)}
			{gameOver && applesCollected >= 10 && (
				<div className='absolute bottom-0 pb-6 w-full z-[5]'>
					<div className='w-full bg-black bg-opacity-50 text-green-500  text-lg text-center px-3 py-2'>
						<span>Congratulation 🎊 ! You did it</span>
					</div>
					<div className='w-full text-center'>
						<button
							className='px-3 py-2 mt-2 rounded-lg bg-green-500'
							onClick={startGame}
						>
							play-again
						</button>
					</div>
				</div>
			)}
			{gameOver && applesCollected < 10 && (
				<div className='absolute bottom-0 pb-6 w-full z-[5]'>
					<div className='w-full bg-black bg-opacity-50 text-lg text-red-500  text-center px-3 py-2'>
						<span>No..😔, Next time you can do it ! 😊</span>
					</div>
					<div className='w-full text-center'>
						<button
							className='px-3 py-2 mt-2 rounded-lg bg-red-500'
							onClick={resetGame}
						>
							try-again
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default SnakeGame
