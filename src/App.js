import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./features/users/components/login/Login";
import SignUp from "./features/users/components/signUp/SignUp";
import Header from "./components/header/Header";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";
import Account from "./features/users/components/account/Account";
import axiosInstance from "./conf/api.users";


const App = () => {
	// hooks for the application functionalities
	const [userToken, setUserToken] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userInfo, setUserInfo] = useState({});
	const [isLogged, setIsLogged] = useState(false);

	// function to handle the user's email settings
	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
	};

	// function to handle the user's password settings
	const handlePasswordChange = (event) => {
		const value = event.target.value;
		setPassword(value);
	};

	// function to determine if the user is logged or not
	const setUser = (token) => {
		if (token) {
			setIsLogged(true);
			setUserToken(token)
		} else {
			setUserToken(null);
			setIsLogged(false);
		}
	};

	// Function to get the user's information when logged
	const getUserInfo = () => {
		if (isLogged){
			axiosInstance
				.get(
					"user",
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Token ${userToken}`,
						},
					},
				)
				.then(resp =>setUserInfo(resp.data))
			;
		}
	}

	useEffect(() => {
		getUserInfo();
	})

	return (
		<Router>
			<div className="App">
				<Header
					isLogged={isLogged}
					setIsLogged={setIsLogged}
					username={userInfo.username}
				/>
				<Switch>
					<Route path="/login">
						<Login
							email={email}
							setEmail={setEmail}
							handleEmailChange={handleEmailChange}
							password={password}
							setPassword={setPassword}
							handlePasswordChange={handlePasswordChange}
							setUser={setUser}
						/>
					</Route>
					<Route path="/signup">
						<SignUp
							email={email}
							setEmail={setEmail}
							handleEmailChange={handleEmailChange}
							password={password}
							setPassword={setPassword}
							handlePasswordChange={handlePasswordChange}
							setUser={setUser}
						/>
					</Route>
					<Route path="/account" component={Account} />
					<Route component={Home} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
