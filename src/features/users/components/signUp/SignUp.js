import axiosInstance from "./../../../../conf/api.users";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

import "./SignUp.scss";

const SignUp = () => {
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password1: '',
		password2:'',
		first_name:'',
		last_name:'',
	});
	const {email, username, password1, password2, first_name, last_name} = formData;
	const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
	const history = useHistory();

	const handleCreateUser = async (event) => {
		try {
			event.preventDefault();
			const resp = await axiosInstance.post("registration/", {
				email: email,
				username: username,
				password1: password1,
				password2: password2,
				first_name: first_name,
				last_name: last_name,
			})
			if (resp.data.access_token) {
				Cookie.set(resp.data.access_token)
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
								onChange={e => onChange(e)}
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
								onChange={e => onChange(e)}
							/>
						</div>
						<div className="password">
							<label htmlFor="password1" className="password">
								Mot de passe:
							</label>
							<input
								className="password-input"
								type="password"
								name="password1"
								placeholder="Password"
								value={password1}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className="password">
							<label htmlFor="password2" className="password">
								Confirmation mot de passe:
							</label>
							<input
								className="password-input"
								type="password"
								name="password2"
								placeholder="Confirmation mot de passe"
								value={password2}
								onChange={e => onChange(e)}
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
								onChange={e => onChange(e)}
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
								onChange={e => onChange(e)}
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
