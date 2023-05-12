import type { Component } from "solid-js"

const NavbarItemLink: Component<{ href: string; text: string }> = (props) => {
	return (
		<a
			class="
				rounded-lg 
				font-medium
				text-primary-300 
				text-opacity-70 
				hover:text-primary-200
				hover:text-opacity-90 
				hover:drop-shadow-[0px_0px_40px_rgba(240,171,252,0.8)]

				duration-1000
			"
			href={props.href}
		>
			{props.text}
		</a>
	)
}

export default NavbarItemLink
