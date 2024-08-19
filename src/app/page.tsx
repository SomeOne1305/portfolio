'use client'

import { useState } from 'react'
import Hero from '../components/Hero'

export default function Home() {
	// State to hold the animation delays
	const [delays] = useState(
		'Ahmadullo Kholmuminov'.split('').map((_, i) => 0.3 * i)
	)

	return (
		<div className='w-full min-h-screen bg-mobMesh md:bg-mesh'>
			<div className='container pt-10'>
				<div className='w-full min-h-[90vh] flex items-center'>
					<div className='w-full xl:w-1/2 p-2 lg:p-5 h-full'>
						<span className='text-white text-2xl md:text-3xl flex'>
							Hi everyone 👋 . I am
						</span>
						<h1 className='text-white text-5xl md:text-5xl mt-6 flex items-center'>
							{'Ahmadullo Kholmuminov'.split(' ').map((item, index) => (
								<span className='inline-flex mr-3' key={item + '_' + index}>
									{item.split('').map((letter, ind) => (
										<span
											className='hover:animate-jelly-bounce hover:text-green-500 block cursor-pointer'
											key={letter + ind}
										>
											{letter}
										</span>
									))}
								</span>
							))}
						</h1>
						<br />
						<span className='text-2xl md:text-4xl text-teal-500 lg:text-violet-600'>
							&gt; Full-stack developer{' '}
						</span>
						<div className='w-full mt-[33%] lg:mt-[20%]'>
							<span className='text-gray-400 text-xl'>
								{'// Find my profile on Github'}
							</span>
							<br />
							<p className='gap-2 text-xl mt-4'>
								<span className='text-violet-600'>const </span>
								<span className='text-teal-500'>githubLink</span>
								<span className='text-slate-200'> = </span>
								<span className='text-orange-400 break-words'>
									&quot;https://github.com/SomeOne1305&quot;
								</span>
							</p>
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
