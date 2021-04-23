import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie  from "js-cookie"
import Login from "./features/users/components/login/Login";
import SignUp from "./features/users/components/signUp/SignUp";
import Header from "./components/header/Header";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";
import Account from "./features/users/components/account/Account";
import axiosInstance from "./conf/api.users";
// import axios from 'axios';

const App = () => {
	const [userToken, setUserToken] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userInfo, setUserInfo] = useState({});
	const [isLogged, setIsLogged] = useState(false);

	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
	};

	const handlePasswordChange = (event) => {
		const value = event.target.value;
		setPassword(value);
	};

	const setUser = (token) => {
		if (token) {
			setIsLogged(true);
			setUserToken(token);
		} else {
			token = ""
			setUserToken(token);
			setIsLogged(false);
		}
	};

	const getUserInfo = () => {
		if (isLogged) {
			axiosInstance
				.get("user/", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `JWT ${userToken}`,
					},
				})
				.then((resp) => {
					const info = resp.data;
					setUserInfo(info)
				})
				.catch((error) => console.error(`Error: ${error}`));
		}

		return (
			<div>
				<Header username = {userInfo.username}/>
				<Account userInfo={userInfo} />
			</div>
		);
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<Router>
			<div className="App">
				<Header
					isLogged={isLogged}
					setIsLogged={setIsLogged}
					setUserToken={setUserToken}
					userToken={userToken}
					getUserInfo={getUserInfo}
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
					<Route path="/account">
						<Account userInfo={userInfo} />
					</Route>
					<Route component={Home} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
