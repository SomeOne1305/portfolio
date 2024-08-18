import Image from 'next/image'
import React from 'react'

export default function page() {
	return (
		<section className='bg-maintenance h-screen w-full flex justify-center items-center'>
			<div className='max-w-xl text-center m-6 md:p-10'>
				<div className='max-w-[470px] w-full h-[470px] relative'>
					<Image
						fill
						src='https://techzaa.getappui.com/wrap/assets/images/maintenance/hse.svg'
						className='mx-auto'
						alt=''
					/>
				</div>
				<h1 className='md:text-3xl text-2xl font-semibold text-[#43D9AD]'>
					The website is currently undergoing maintenance
				</h1>
				<p className='md:text-lg text-sm font-medium text-violet-500 mt-5'>
					Our platform is undergoing routine maintenance. We appreciate your
					work in patience and will be back online soon.
				</p>
			</div>
		</section>
	)
}
