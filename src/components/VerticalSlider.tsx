'use client'
import 'swiper/css/keyboard'
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
		<div className='w-full mb-auto flex'>
			<Swiper
				direction='vertical'
				slidesPerView={2}
				slidesPerGroup={1}
				centeredSlides={true}
				modules={[Keyboard, Autoplay]}
				autoplay
				keyboard
				speed={1000}
				style={{
					height: '85vh',
					transform: 'translateY(-100px)',
				}}
				onSlideChange={swiper => {
					swiper.slides.forEach((slide, index) => {
						slide.style.opacity = index === swiper.activeIndex ? '1' : '0.5'
						slide.style.filter =
							index === swiper.activeIndex ? 'none' : 'blur(2px)'
					})
				}}
			>
				{Array(10)
					.fill('c')
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
