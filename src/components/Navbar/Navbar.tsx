import { Component, For, Show, createSignal } from "solid-js"
import NavbarItemLink from "./NavbarItemLink"

const Navbar: Component<{}> = () => {
	const [isPrimary, setIsPrimary] = createSignal(true)

	const primaryNavLinks = [
		["Sehen", "/visual"],
		["Hören", "/audio"],
		["Sagen", "/blog"],
	]

	const secondaryNavLinks = [
		["About", "/about/"],
		["Kategorien", "/tags/"],
	]

	return (
		<>
			<ul class="w-screen flex justify-around items-center text-primary-300">
				<Show when={isPrimary()}>
					<For each={primaryNavLinks}>
						{(item) => (
							<NavbarItemLink
								text={item[0]}
								href={item[1]}
							/>
						)}
					</For>
				</Show>

				<Show when={!isPrimary()}>
					<For each={secondaryNavLinks}>
						{(item) => (
							<NavbarItemLink
								text={item[0]}
								href={item[1]}
							/>
						)}
					</For>
				</Show>
			</ul>

			<button
				class="cursor-pointer flex flex-col m-2"
				onclick={() => {
					setIsPrimary(!isPrimary())
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-12 opacity-80"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</>
	)
}

export default Navbar
