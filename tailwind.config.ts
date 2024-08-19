import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#011627',
			},
			backgroundImage: {
				mobMesh:
					'radial-gradient(circle 57vh at 45.5% 65.1%, #43d9ac80 0px, transparent 45%),radial-gradient(circle 68vh at 55.7% 40.0%, #4d5cce98 0px, transparent 45%)',
				mesh: 'radial-gradient(circle 45vw at 75.5% 54.1%, #43d9ac80 0px, transparent 45%),radial-gradient(circle 50vw at 65.7% 33.0%, #4d5cce98 0px, transparent 45%)',
				back: 'linear-gradient(to left top, #43d9ac22, #175553 )',
				maintenance:
					'radial-gradient(circle 61vh at 41.5% 57.1%, #43d9ac80 0px, transparent 45%),radial-gradient(circle 73vh at 55.7% 40.0%, #4d5cce98 0px, transparent 45%)',
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '100%',
					md: '748px',
					lg: '1004px',
					xl: '1200px',
					'2xl': '1440px',
					'3xl': '1440px',
				},
			},
		},
		screens: {
			xs: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		keyframes: {
			'jelly-bounce': {
				'0%, 100%': { transform: 'scale(1, 1) rotate(0deg)' },
				'30%': { transform: 'scale(1.25, 0.75) rotate(3deg)' },
				'40%': { transform: 'scale(0.75, 1.25) rotate(-3deg)' },
				'50%': { transform: 'scale(1.15, 0.85) rotate(1deg)' },
				'65%': { transform: 'scale(0.95, 1.05) rotate(-1deg)' },
				'75%': { transform: 'scale(1.05, 0.95) rotate(0deg)' },
			},
		},
		animation: {
			'jelly-bounce': 'jelly-bounce 0.5s ease-in-out',
		},
	},
	plugins: [],
}

export default config
