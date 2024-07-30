import { NAVBAR } from '@/constants/navbar.contant'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { NavLink } from './common'

export default function Navbar() {
	return (
		<div className='w-full fixed flex items-center top-0 left-0 z-20 border-b border-b-gray-500 bg-primary'>
			<Link href={'/'} className='text-[#607B96] px-4 py-3'>
				<h1 className='text-xl mr-5'>_ahmadullo</h1>
			</Link>
			<div className='container'>
				<div className='hidden lg:inline-flex items-center border-x border-gray-500'>
					{NAVBAR.map(item => (
						<NavLink
							key={item.title}
							href={item.url}
							className={`text-[#607B96] text-xl px-4 py-3 border-r border-gray-500 last:border-r-0 [&.active]:border-b-4 [&.active]:border-b-orange-400`}
						>
							{item.title}
						</NavLink>
					))}
				</div>
			</div>
			<div className='inline-flex items-center lg:border-x border-gray-500'>
				<NavLink
					href={'/contact'}
					className={`text-[#607B96] text-xl px-4 py-3 border-r border-gray-500 last:border-r-0 [&.active]:border-b-2 [&.active]:border-b-orange-400 hidden lg:block`}
				>
					_contact-me
				</NavLink>
				<FaBars className='text-3xl text-slate-100 mx-2 mr-3' />
			</div>
		</div>
	)
}
