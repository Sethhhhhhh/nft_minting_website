/** @type {import('tailwindcss').Config} */ 
module.exports = {
	content: [
	  	"./index.html",
	  	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  	extend: {
			backgroundImage: {
				'banner': "url('banner.png')",
			},
			fontFamily: {
				'bakbak': ['Bakbak One', 'cursive']
			},
			animation: {
				'spin-slow': 'spin 30s linear infinite',
			}
		},
	},
	plugins: [],
}
