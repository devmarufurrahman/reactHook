import { useState } from "react";

const domPlayer = {
	firstName: "Marufur",
	lastName: "Rahman",
	jerseyNumber: 10,
};

const Player = () => {
	const [player, setPlayer] = useState({});

	const addPlayerHandler = () => {
		setPlayer({ ...player, ...domPlayer });
	};

	const handleGoal = () => {
		const randomGoal = Math.floor(Math.random() * 10 + 1);

		setPlayer({ ...player, Goals: randomGoal });
	};
	return (
		<div>
			<h1>Player Information</h1>
			<h3>
				Player Name: {player.firstName} {player.lastName}
			</h3>
			<h3>Player Jersey Number: {player.jerseyNumber}</h3>
			<h3>Goals: {player.Goals}</h3>
			<button onClick={addPlayerHandler}>ADD player</button>
			<br />
			<br />
			<button onClick={handleGoal}>Make Goal</button>
		</div>
	);
};

export default Player;
