'use client'

import Hero from '../components/Hero'

export default function Home() {
	return (
		<div className='w-full min-h-screen bg-mobMesh md:bg-mesh'>
			<div className='container pt-10'>
				<div className='w-full min-h-[90vh] flex items-center'>
					<div className='w-full xl:w-1/2 p-2 lg:p-5 h-full'>
						<span className='text-white text-2xl md:text-3xl flex'>
							Hi everyone 👋 . I am
						</span>
						<h1 className='text-white text-5xl md:text-5xl mt-6'>
							Ahmadullo Kholmuminov
						</h1>
						<br />
						<span className='text-2xl md:text-4xl text-teal-500 lg:text-violet-600'>
							&gt; Full-stack developer{' '}
						</span>
						<div className='w-full mt-[33%] lg:mt-[20%]'>
							<span className='text-gray-400 text-xl'>
								// Find my profile on Github
							</span>
							<br />
							<p className='gap-2 text-xl mt-4'>
								<span className='text-violet-600'>const </span>
								<span className='text-teal-500'>githubLink</span>
								<span className='text-slate-200'> = </span>
								<span className='text-orange-400 text-wrap'>
									"https://github.com/SomeOne1305"
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
