'use client'

import GameBoard from '@/components/GameBoard'
import VerticalSlider from '@/components/VerticalSlider'
import { useState } from 'react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/a11y'
import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Hero() {
	const [swiper, setSwiper] = useState<SwiperCore | null>(null)

	return (
		<div className='w-full'>
			<Swiper
				direction='horizontal'
				modules={[A11y]}
				loop
				keyboard
				a11y={{ enabled: true }}
				onSwiper={setSwiper}
				speed={650}
				style={{
					width: '100%',
				}}
			>
				<SwiperSlide className='flex justify-center items-center'>
					<GameBoard swiper={swiper} />
				</SwiperSlide>
				<SwiperSlide>
					<VerticalSlider />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
