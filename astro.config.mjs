import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
	site: "https://maalrocks.github.io",
	integrations: [tailwind(), solidJs()],
})
