/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: colors.fuchsia,
			},
			backgroundImage: {
				"index-bg": "url('/images/background/purple_black_abstract.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
}
