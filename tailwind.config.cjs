/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"index-bg": "url('/images/background/purple_black_abstract.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
}
