import MainLayout from '@/components/layouts/MainLayout'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Head from 'next/head'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Ahmadullo Kholmuminov',
		template: '%s | Ahmadullo Kholmuminov',
	},
	description: 'Fullstack developer',
	icons: [],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/meta/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/meta/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/meta/favicon-16x16.png'
				/>
				<link rel='manifest' href='/meta/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/meta/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<body className={firaCode.className + ' bg-primary'}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
