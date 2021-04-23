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
	const [password2, setPassword2] = useState("");
	const [last_name, setLastName] = useState("");
	const [first_name, setFirstName] = useState("");

	const handleCreateUser = async (event) => {
		try {
			event.preventDefault();
			alert(first_name)
			const resp = await axiosInstance.post("registration/", {
				email: email,
				username: username,
				password1: password,
				password2: password2,
				first_name: first_name,
				last_name: last_name,
			})
			if (resp.data.access_token) {
				setUser(resp.data.access_token);
				setEmail("");
				setUsername("");
				setPassword("");
				setPassword2("");
				setFirstName("");
				setLastName("");
				history.push("/");
			}
		} catch (e) {
			console.error(e.response.data);
		}
	};

	const handleFirstName = (event) => {
		const value = event.target.value;
		setFirstName(value);
	};

	const handleLastName = (event) => {
		const value = event.target.value;
		setLastName(value);
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
						<div className="email">
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
						</div>
						<div className="username">
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
						</div>
						<div className="password">
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
						</div>
						<div className="password">
							<label htmlFor="password" className="password">
								Confirmation mot de passe:
							</label>
							<input
								className="password-input"
								type="password"
								name="password"
								placeholder="Confirmation mot de passe"
								value={password2}
								onChange={(event) => {
									setPassword2(event.target.value);
								}}
							/>
						</div>
						<div className="firstname">
							<label htmlFor="first_name" className="firstname">
								Prénom:
							</label>
							<input
								className="firstname-input"
								type="text"
								name="first_name"
								placeholder="Prénom"
								value={first_name}
								onChange={handleFirstName}
							/>
						</div>
						<div className="lastName">
							<label htmlFor="last_lame" className="lastName">
								Nom:
							</label>
							<input
								className="lastName-input"
								type="text"
								name="last_name"
								placeholder="Nom"
								value={last_name}
								onChange={handleLastName}
							/>
						</div>
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
