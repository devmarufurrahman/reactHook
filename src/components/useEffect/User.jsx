import { useEffect, useState } from "react";

const User = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const fetchUser = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				if (!response.ok)
					throw new Error("Something wrong!!! Please Solve & Try again");
				return response.json();
			})
			.then((data) => {
				setUsers(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	};
	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<div>
			{isLoading ? <h1>Loading........</h1> : null}

			{error ? (
				<h1 style={{ color: "red" }}>{error}</h1>
			) : (
				users.map((user) => (
					<div key={user.id}>
						<h1>{user.name}</h1>
						<p>{user.phone}</p>
						<p>{user.email}</p>
					</div>
				))
			)}
		</div>
	);
};

export default User;
