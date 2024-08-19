import { COLORS } from '@/constants/colors.constant'
import NextTopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'
import Navbar from '../Navbar'

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div className='bg-primary h-screen'>
			<NextTopLoader
				color={COLORS.teal}
				crawl={true}
				speed={600}
				crawlSpeed={600}
				easing='linear'
				height={3}
				showSpinner={false}
				shadow={`0px 0px 5px 5px ${COLORS.teal},0px 0px 5px 5px ${COLORS.teal}`}
			/>
			<Navbar />
			{children}
		</div>
	)
}
