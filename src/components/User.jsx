import { useState } from "react";

const User = () => {
	const [user, setUser] = useState([]);

	const handleUser = () => {
		const id = user.length;
		const number = Math.floor(Math.random() * 100 + 1);

		setUser([...user, { id: id, number: number }]);
		console.log(user);
	};
	return (
		<div>
			<button onClick={handleUser}>ADD User</button>
			{user.length > 0 &&
				user.map((singleUser) => (
					<h2 key={singleUser.id}>{singleUser.number}</h2>
				))}
		</div>
	);
};

export default User;
