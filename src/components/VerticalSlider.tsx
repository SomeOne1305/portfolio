'use client'
import 'swiper/css'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CodeBlock from './common/CodeBlock'

const code = `type Primitive = string | number | boolean | symbol | bigint | undefined | null;

type DeepMergeTwoTypes<T, U> = (
  T extends Primitive ? T :
  U extends Primitive ? U :
  T extends Array<infer TItem> ?
  U extends Array<infer UItem> ? Array<DeepMergeTwoTypes<TItem, UItem>> : T :
  T extends Record<string, any> ?
  U extends Record<string, any> ? DeepMerge<T, U> : T :
  T
);
`

const VerticalSlider = () => {
	return (
		<div className='w-full h-[85vh] flex'>
			<Swiper
				direction='vertical'
				slidesPerView={2}
				slidesPerGroup={1}
				centeredSlides={true}
				modules={[Keyboard, Autoplay]}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				keyboard={{ enabled: true }}
				speed={800}
				onSlideChange={swiper => {
					swiper.slides.forEach((slide, index) => {
						const isActive = index === swiper.activeIndex
						slide.style.opacity = isActive ? '1' : '0.5'
						slide.style.filter = isActive ? 'none' : 'blur(2px)'
					})
				}}
				style={{
					height: '100%',
					transform: 'translateY(-50px)',
				}}
			>
				{Array(10)
					.fill('')
					.map((_, i) => (
						<SwiperSlide key={'slide' + i}>
							<CodeBlock code={code} language='tsx' />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}

export default VerticalSlider
