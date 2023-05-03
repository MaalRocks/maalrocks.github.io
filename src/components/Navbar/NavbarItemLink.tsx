import type { Component } from "solid-js"

const NavbarItemLink: Component<{ href: string; text: string }> = (props) => {
	return (
		<a
			class="rounded-lg font-medium text-fuchsia-100  hover:text-fuchsia-900"
			href={props.href}
		>
			{props.text}
		</a>
	)
}

export default NavbarItemLink
