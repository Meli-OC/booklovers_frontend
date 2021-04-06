import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SignUp.scss";

const SignUp = ({
	email,
	setEmail,
	password,
	setPassword,
	setUser,
	handleEmailChange,
	handlePasswordChange,
}) => {
	const history = useHistory();
	const [username, setUsername] = useState("");

	const handleCreateUser = async (event) => {
		try {
			event.preventDefault();
			const resp = await axios.post("http://localhost:8888/api/auth/register", {
				headers: { "Content-Type": "application/json" },
				email: email,
				username: username,
				password: password,
			});
			console.log(resp.data);
			if (resp.data.key) {
				setUser(resp.data.key);
				setEmail("");
				setPassword("");
				history.push("/");
			}
		} catch (e) {
			alert(e.response.data);
		}
	};

	return (
		<div className="signUp-container">
			<form
				action="POST"
				name="signUp-form"
				className="signUp-form"
				onSubmit={handleCreateUser}
			>
				<div className="signU-info">
					<h3>Créer un compte</h3>
					<div className="form-SignUp">
						<label htmlFor="username" className="username">
							Username:
						</label>
						<input
							className="username-input"
							type="text"
							name="username"
							placeholder="Username"
							value={username}
							onChange={(event) => {
								setUsername(event.target.value);
							}}
						/>
						<label htmlFor="email" className="email">
							Email:
						</label>
						<input
							className="email-input"
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={handleEmailChange}
						/>
						<label htmlFor="password" className="password">
							Mot de passe:
						</label>
						<input
							className="password-input"
							type="password"
							name="password1"
							placeholder="Password 1"
							value={password}
							onChange={handlePasswordChange}
						/>
						<button type="submit" value="Submit">
							Créer
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
