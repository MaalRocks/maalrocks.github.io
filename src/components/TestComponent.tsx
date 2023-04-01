import { createSignal } from "solid-js"

function TestComponent() {
	const [count, setCount] = createSignal(0)

	return (
		<div class="mx-auto">
			<button
				class="py-1 px-3 rounded-sm bg-blue-700"
				onClick={() => setCount(count() + 1)}
			>
				+1
			</button>
			<p>{count()}</p>

			<button class="py-1 m-2 px-3 rounded-sm bg-blue-700">setCookie</button>

			<button class="py-1 m-2 px-3 rounded-sm bg-blue-700">getCookie</button>
		</div>
	)
}
export default TestComponent
