import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const incrementHandler = (iteration = 1) => {
		setCount((prevCount) => prevCount + iteration);
	};
	const decrementHandler = (iteration = 1) => {
		setCount((prevCount) => prevCount - iteration);
	};
	const resetHandler = () => {
		setCount(0);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => incrementHandler(5)}>Increment Five</button>
			<button onClick={() => incrementHandler()}>Increment </button>
			<button onClick={() => incrementHandler(10)}>Increment Ten</button>
			<button onClick={() => decrementHandler(15)}>Decrement</button>
			<button onClick={resetHandler}>Reset</button>
		</div>
	);
};

export default Counter;
