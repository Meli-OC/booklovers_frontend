import React from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "./../../../../conf/api.users";
import "./Login.scss";

const Login = ({
	email,
	setEmail,
	password,
	setPassword,
	setUser,
	handleEmailChange,
	handlePasswordChange,
}) => {
	// function that allow the connection to the user account.
	// he post his information and api return the user's token.

	const history = useHistory();
	
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			// axios request to log to our account
			const resp = await axiosInstance.post("login", {
				email: email,
				password: password,
			});
			if (resp.data.token) {
				setUser(resp.data.token);
				// when logged we return to th homepage
				setEmail("")
				setPassword("")
				history.push("/");
			} else {
				alert("Une erreur est survenue");
			}
		} catch (e) {
			console.error(e.response);
		}
	};

	return (
		<div className="login-container">
			<form
				action="POST"
				name="login-form"
				className="login-form"
				onSubmit={handleSubmit}
			>
				<div className="login-info">
					<h3>Connectez-vous à votre compte</h3>
					<div className="formInfo">
						<label htmlFor="email" className="email">
							Email
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
							Mot de passe
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
							Connexion
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
