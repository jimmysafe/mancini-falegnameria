module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				primary: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: '#CAB7A8', // brownish
				secondary: '#313131', // bg-color dark
				tertiary: '#191919', // bg-color superdark
				darkText: '#707070', // dark text grey
			},
			keyframes: {
				slideIn: {
					'0%': { left: '100vw' },
					'100%': { left: '0vw' },
				},
				slideOut: {
					'0%': { left: '0vw' },
					'100%': { left: '100vw' },
				},
			},
			animation: {
				slideIn: 'slideIn 300ms ease-in-out',
				slideOut: 'slideOut 300ms ease-in-out',
			},
		},
	},
	variants: {
		extend: {
			inset: ['group-hover'],
		},
	},
	plugins: [],
};
