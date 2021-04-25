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
		},
	},
	variants: {
		extend: {
			inset: ['group-hover'],
		},
	},
	plugins: [],
};
