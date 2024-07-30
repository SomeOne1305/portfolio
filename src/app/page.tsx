'use client'

import { CodeBlock } from '@/components/common'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<div className='w-full min-h-screen bg-mobMesh md:bg-mesh'>
			<div className='container pt-10'>
				<div className='w-full min-h-[95vh] flex items-center'>
					<div className='w-full xl:w-1/2 p-5 h-full mb-[15%]'>
						<span className='text-white text-2xl md:text-3xl flex'>
							Hi everyone
							<div className='w-10 h-10 relative ml-3'>
								<Image
									src={
										'https://em-content.zobj.net/source/telegram/358/waving-hand_1f44b.webp'
									}
									alt='wave'
									fill
									sizes='cover'
									unoptimized
								></Image>
							</div>
							. I am
						</span>
						<h1 className='text-white text-4xl md:text-5xl mt-6'>
							Ahmadullo Kholmuminov
						</h1>
						<br />
						<span className='text-2xl md:text-4xl text-teal-500 lg:text-violet-600'>
							&gt; Full-stack developer{' '}
						</span>
						<div className='w-full mt-[25%] lg:mt-[10%]'>
							<CodeBlock
								code={`// find my profile on Github`}
								language='ts'
								customStyle={{
									background: 'transparent',
									width: '100%',
								}}
								size=' text-xl'
							></CodeBlock>
							<CodeBlock
								code={`
							const githubLink = 'https:://github.com/SomeOne1305'
						`}
								language='ts'
								size=' text-xl'
								customStyle={{
									background: 'transparent',
									width: '80vw',
								}}
							></CodeBlock>
						</div>
					</div>
					<div className='w-1/2 h-auto hidden xl:block'>
						<Hero />
					</div>
				</div>
			</div>
		</div>
	)
}
