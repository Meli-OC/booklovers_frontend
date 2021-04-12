import axiosInstance from "./../../../../conf/api.users";
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
			const resp = await axiosInstance.post("register", {
				email: email,
				username: username,
				password: password,
			});
			if (resp.data.token) {
				setUser(resp.data.token);
				setEmail("");
				setUsername("")
				setPassword("");
				history.push("/");
			}
		} catch (e) {
			console.error(e.response.data);
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
				<div className="signUp-info">
					<h3>Créer un compte</h3>
					<div className="form-signUp">
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
						<label htmlFor="password" className="password">
							Mot de passe:
						</label>
						<input
							className="password-input"
							type="password"
							name="password"
							placeholder="Password"
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
