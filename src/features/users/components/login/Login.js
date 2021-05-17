import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import { useAppContext } from "../../../../libs/contextLib";
import axiosInstance from "./../../../../conf/api.users";
import "./Login.scss";

const Login = ({
	setEmail,
	setPassword,
}) => {
	// function that allow the connection to the user account.
	// he post his information and api return the user's token.
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const { setIsLogged } = useAppContext()
	const {email, password} = formData;
	const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
	const history = useHistory();
	
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			// axios request to log to our account
			const resp = await axiosInstance.post("login/", {
				email: email,
				password: password,
			});
			const token = resp.data.access_token
			if (token) {
				setIsLogged(true)
				Cookie.set("token", token)

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
				onSubmit={e => handleSubmit(e)}
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
							onChange={e => onChange(e)}
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
							onChange={e => onChange(e)}
						/>
						<button type="submit" value="Submit">
							Connexion
						</button>
						<NavLink to="/signup">Pas encore inscrit?</NavLink>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
