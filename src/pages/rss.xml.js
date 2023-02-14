import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get() {
	return rss({
		title: "Rabbithole_AI | Blog",
		description: "A Bunch",
		site: "https://maalrocks.github.io/",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>de-DE</language>`,
	})
}
