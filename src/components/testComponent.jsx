import { createSignal } from "solid-js"

function TestComponent() {
	const [count, setCount] = createSignal(0)

	return (
		<div className="mx-auto">
			<button
				className="py-1 px-3 rounded-sm bg-blue-700"
				onClick={() => setCount(count() + 1)}
			>
				+1
			</button>
			<p>{count}</p>
		</div>
	)
}
export default TestComponent
