import { useEffect, useState } from "react";

const Goals = () => {
	const [count, setCount] = useState(0);
	const [isGoal, setIsGoal] = useState(false);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	useEffect(() => {
		console.log(isGoal);
		setIsGoal(!isGoal);
	}, [count]);
	return (
		<div>
			<h1>Count: {count}</h1>
			<h1>{isGoal ? "Goal" : "no Goal"}</h1>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
};

export default Goals;
