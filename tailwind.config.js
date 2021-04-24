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
				secondary: '#BDBBB7', // greyish
				dark: '#707070', // dark text grey
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
