/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['sans-serif']
		},
		extend: {
			colors: {
				'custom-gray': 'rgb(23, 26, 32, 0.8)',
			},
		},
	},
	plugins: [],
}
