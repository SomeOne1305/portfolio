'use client'
import { NAVBAR } from '@/constants/navbar.contant'
import { AnimatePresence, motion } from 'framer-motion'
import { Divide } from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from './common'

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<div className='w-full fixed top-0 left-0 z-20 bg-primary'>
			<div className='w-full flex items-center border-b border-b-gray-500'>
				<Link href={'/'} className='text-[#607B96] px-4 py-3'>
					<h1 className='text-xl mr-5'>_ahmadullo</h1>
				</Link>
				<div className='container relative'>
					<div className='hidden lg:inline-flex items-center border-x border-gray-500'>
						{NAVBAR.map(item => (
							<NavLink
								key={item.title}
								href={item.url}
								className={`text-[#607B96] text-xl px-4 py-3 border-r border-gray-500 last:border-r-0 [&.active]:border-b-4 [&.active]:border-b-orange-400 text-nowrap`}
							>
								{item.title}
							</NavLink>
						))}
					</div>
				</div>
				<div className='inline-flex items-center lg:border-x border-gray-500'>
					<NavLink
						href={'/contact'}
						className={`text-[#607B96] text-xl px-4 py-3 border-r border-gray-500 last:border-r-0 [&.active]:border-b-2 [&.active]:border-b-orange-400 hidden lg:block text-nowrap`}
					>
						_contact-me
					</NavLink>
					<div className='lg:hidden mx-3'>
						<Divide
							color='gray'
							size={32}
							toggled={toggle}
							toggle={setToggle}
						/>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{toggle && (
					<motion.div
						className='w-full overflow-hidden flex flex-col justify-between'
						animate={{ height: 'calc(100vh - 50px)' }}
						initial={{ height: '0' }}
						exit={{ height: '0' }}
						transition={{ ease: 'linear' }}
					>
						<div className='w-full'>
							{NAVBAR.map(tab => (
								<Link
									href={tab.url}
									className='w-full  block border-y even:border-gray-500 px-4 py-3 text-[#607B96] text-xl'
									onClick={() => setTimeout(() => setToggle(false), 400)}
									key={tab.title}
								>
									{tab.title}
								</Link>
							))}
							<Link
								href={'/contact'}
								className='w-full  block border-y even:border-gray-500 px-4 py-3 text-[#607B96] text-xl'
								onClick={() => setTimeout(() => setToggle(false), 400)}
							>
								_contact-me
							</Link>
						</div>
						<div className='w-full border-t border-gray-500 py-5'>
							find me in
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
