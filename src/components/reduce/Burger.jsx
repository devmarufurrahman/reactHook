import { useReducer } from "react";

const initialState = {
	numOfBurger: 20,
	numOfPizza: 10,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "buy":
			return {
				...state,
				numOfBurger: state.numOfBurger - action.payload,
			};
		case "restock":
			return {
				...state,
				numOfBurger: state.numOfBurger + action.payload,
			};
		case "reset":
			return {
				...state,
				numOfBurger: action.payload,
			};
		default:
			return state;
	}
};

const Burger = () => {
	const [fastFood, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>Total Burger: {fastFood.numOfBurger}</h1>
			<button onClick={() => dispatch({ type: "buy", payload: 10 })}>
				Buy 10 burger
			</button>
			<button onClick={() => dispatch({ type: "buy", payload: 20 })}>
				Buy 20 burger
			</button>
			<button onClick={() => dispatch({ type: "restock", payload: 100 })}>
				Restock 100 burger
			</button>
			<button onClick={() => dispatch({ type: "reset", payload: 10 })}>
				Reset 10 burger
			</button>
		</div>
	);
};

export default Burger;
