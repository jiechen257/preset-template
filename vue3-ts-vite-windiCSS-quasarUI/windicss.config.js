module.exports = {
	darkMode: 'class',
	corePlugins: {
		preflight: false,
	},
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			zIndex: {
				'-1': '-1',
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1600px',
			},
		},
	},
};
