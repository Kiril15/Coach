/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.tsx', './app/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
    	colors: {
    		base: '#0B0C0C',
    		neon: '#0ddb74',
			muted: '#666666'
    	}
    }
	},
	plugins: []
}
