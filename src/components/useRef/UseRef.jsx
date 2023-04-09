import { useEffect, useRef } from "react";

const UseRef = () => {
	const goals = {
		span: 2,
		bra: 3,
	};

	const brazilRef = useRef(null);
	const spanRef = useRef(null);

	useEffect(() => {
		if (goals.bra < goals.span) {
			spanRef.current.style.color = "blue";
		} else {
			brazilRef.current.style.color = "blue";
		}
	}, []);
	return (
		<div>
			<h1 ref={brazilRef}>Brazil: {goals.bra}</h1>
			<h1 ref={spanRef}>Span: {goals.span}</h1>
		</div>
	);
};

export default UseRef;
