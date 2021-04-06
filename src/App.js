import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./features/users/components/login/Login";
import SignUp from "./features/users/components/signUp/SignUp";
import Header from "./components/header/Header";
import Home from "./conf/home/Home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";
import Account from "./features/users/components/account/Account";
import axios from "axios";

const App = () => {
	const [userToken, setUserToken] = useState();
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

	const setUser = (key) => {
		if (key) {
			Cookies.set("userToken", key, { expires: 7 });
			setIsLogged(true);
			const response = axios.get(
				"http://localhost:8888/authentication/users/",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${key}`,
					},
				}
			);
			console.log(response.data);
			// // setUserInfo(response.data);
		} else {
			Cookies.remove("userToken");
			setUserToken(null);
			setIsLogged(false);
		}
	};

	return (
		<Router>
			<div className="App">
				<Header
					isLogged={isLogged}
					setIsLogged={setIsLogged}
					// user={userInfo.username}
				/>
				<Switch>
					<Route path="/login">
						<Login
							email={email}
							handleEmailChange={handleEmailChange}
							password={password}
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
