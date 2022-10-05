/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./shared/**/*.{vue,js,ts,jsx,tsx}',
		'./constants/**/*.{vue,js,ts,jsx,tsx}',
		'./enum/**/*.{vue,js,ts,jsx,tsx}',
		'./features/**/*.vue',
		'./components/**/*.{vue,js,ts,jsx,tsx}',
		'./pages/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			xxs: '.8125rem',
			xs: '.875rem',
			s: '.9375rem',
			m: '1rem',
			l: '1.125rem',
			xl: '1.25rem',
			xxl: '1.5rem',
		},
		fontFamily: {
			jost: 'Jost, sans-serif',
		},

		letterSpacing: {
			tightest: '-0.33px',
			tighter: '-0.25px',
			tight: '-0.2px',
		},
		borderRadius: {
			DEFAULT: '10px',
		},
		extend: {
			boxShadow: {
				'pf-shadow-1': '0px 10px 40px -7px rgba(55,63,104,0.35)px',
			},
			gridTemplateColumns: {
				suggestion: '1fr 3fr',
			},
			colors: {
				primary: {
					400: '#656EA3',
					500: '#647196',
					600: '#3a4374',
					700: '#373f68',
				},
				secondary: {
					400: '#f7f8fd',
					500: '#f2f4ff',
					600: '#CFD7FF',
				},
				accent: {
					primary: {
						400: '#c75af6',
						500: '#ad1fea',
					},
					secondary: {
						400: '#7c91f9',
						500: '#4661e6',
					},
					third: {
						500: '#f49f85',
					},
				},
				error: {
					400: '#E98888',
					500: '#D73737',
				},
				white: '#fff',
				'light-blue': '#62bcfa',
			},
		},
	},
};
