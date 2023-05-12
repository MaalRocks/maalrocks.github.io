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
				<span class="w-10 h-1.5 m-1 bg-fuchsia-600/60"></span>
				<span class="w-10 h-1.5 mx-1 bg-fuchsia-600/60"></span>
				<span class="w-10 h-1.5 m-1 bg-fuchsia-600/60"></span>
			</button>
		</>
	)
}

export default Navbar
