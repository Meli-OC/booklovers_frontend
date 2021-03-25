import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Login.scss";

const Login = ({ token, setToken }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	// const [isLoading, setIsLoading] = useState(false);

	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
	};

	const handlePasswordChange = (event) => {
		const value = event.target.value;
		setPassword(value);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			// setIsLoading(true);

			const resp = await axios.post(
				"http://localhost:8888/authentication/login/",
				{
					headers: { "Content-Type": "application/json" },
					email: email,
					password: password,
				}
			);
			if (resp.data.key) {
				setToken(resp.data.key);
				history.push("/");
			} else {
				alert("Une erreur est survenue");
			}
		} catch (e) {
			console.error(e.response.data);
		}
	};

	return (
		<div className="login-container">
			<form action="POST" name="login-form" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<button type="submit" value="Submit">
					Connexion
				</button>
			</form>
		</div>
	);
};

export default Login;
