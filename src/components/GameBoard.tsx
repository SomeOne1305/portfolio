'use client'
import { COLORS } from '@/constants/colors.constant'
import { useSnakeGameStore } from '@/stores/useSnakeGameStore'
import { cn } from '@/utils/cn'
import { useMemo } from 'react'
import {
	FaCaretDown,
	FaCaretLeft,
	FaCaretRight,
	FaCaretUp,
} from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import Swiper from 'swiper'
import SnakeGame from './snakegame/SnakeGame'

export default function GameBoard({ swiper }: { swiper: Swiper | null }) {
	const collectedApples = useSnakeGameStore(state => state.collectedApples)
	const appleBalls = useMemo(() => {
		return Array.from({ length: 10 }).map((_, index) => (
			<div
				key={index}
				className={cn(
					`w-5 h-5 rounded-full shadow-custom bg-[${COLORS.teal}]`,
					index < collectedApples ? 'bg-[#047f58] eaten' : ''
				)}
			/>
		))
	}, [collectedApples])
	return (
		<div className='p-10 flex rounded-xl bg-back relative mt-[15%]'>
			<div className='p-1 rounded-full bg-back shadow-[inset_0_2px_4px_0_teal] text-teal-950 absolute top-3 left-3'>
				<FaX className='text-sm' />
			</div>
			<div className='p-1 rounded-full bg-back absolute top-3 right-3 shadow-[inset_0_2px_4px_0_teal] text-teal-950'>
				<FaX className='text-sm' />
			</div>
			<div className='p-1 rounded-full bg-back shadow-[inset_0_2px_4px_0_teal] text-teal-950 absolute bottom-3 left-3'>
				<FaX className='text-sm' />
			</div>
			<div className='p-1 rounded-full bg-back shadow-[inset_0_2px_4px_0_teal] text-teal-950 absolute bottom-3 right-3'>
				<FaX className='text-sm' />
			</div>
			<SnakeGame />
			<div className='w-full ml-6'>
				<div className='p-4 rounded-lg bg-black bg-opacity-25 backdrop-blur-lg'>
					<div className='text-xl text-white'>{'// use keyboard'}</div>
					<div className='text-xl text-white'>{'// arrows to play'}</div>
					<div className='w-full mt-6 grid grid-cols-3 gap-4'>
						<div></div>
						<div className='px-2 py-1.5 rounded-md bg-black text-white text-lg text-center'>
							<FaCaretUp className='mx-auto' />
						</div>
						<div></div>
						<div className='px-2 py-1.5 rounded-md bg-black text-white text-lg text-center'>
							<FaCaretLeft className='mx-auto' />
						</div>
						<div className='px-2 py-1.5 rounded-md bg-black text-white text-lg text-center'>
							<FaCaretDown className='mx-auto' />
						</div>
						<div className='px-2 py-1.5 rounded-md bg-black text-white text-lg text-center'>
							<FaCaretRight className='mx-auto' />
						</div>
					</div>
				</div>
				<div className='text-xl text-white mt-4'>{'// food left'}</div>
				<div className='max-w-44 grid grid-cols-5 gap-6 mt-4 pl-2'>
					{appleBalls}
				</div>
				<div className='w-full mt-7'>
					<button
						className='px-3 py-2 text-xl rounded-lg text-white border border-white float-right active:bg-white active:bg-opacity-20'
						onClick={() => swiper?.slideNext()}
					>
						Skip
					</button>
				</div>
			</div>
		</div>
	)
}
