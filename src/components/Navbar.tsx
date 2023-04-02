import type { Component } from "solid-js"

const Navbar: Component<{}> = (props) => {
	const navPages = [
		["Home", "/"],
		["About", "/about/"],
		["Blog", "/blog/"],
		["Themen", "/tags/"],
	]

	const toggleLinkListVisibility = () => {
		const ul = document.getElementById("linkList")
		ul?.classList.toggle("opacity-0")
	}

	return (
		<>
			<ul
				id="linkList"
				class="w-full flex justify-around items-center opacity-0 transition-opacity duration-500 ease-in-out"
			>
				{navPages.map(([title, url]) => (
					<a
						href={url}
						class="rounded-lg font-medium text-fuchsia-100  hover:text-fuchsia-900 "
					>
						{title}
					</a>
				))}
			</ul>

			<button
				class="cursor-pointer flex flex-col m-2"
				onclick={() => {
					toggleLinkListVisibility()
				}}
			>
				<span class="w-10 h-1.5 m-1 bg-fuchsia-600/60"></span>
				<span class="w-10 h-1.5 mx-1 bg-fuchsia-600/60"></span>
				<span class="w-10 h-1.5 m-1 bg-fuchsia-600/60"></span>
			</button>
		</>
	)
}

export default Navbar
