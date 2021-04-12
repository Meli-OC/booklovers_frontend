import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./features/users/components/login/Login";
import SignUp from "./features/users/components/signUp/SignUp";
import Header from "./components/header/Header";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";
import Account from "./features/users/components/account/Account";
// import axiosInstance from "./conf/api.users";
import axios from 'axios';


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
			Cookies.set("userToken", token, { expires: 7 });
			setIsLogged(true);
			setUserToken(token)
		} else {
			Cookies.remove("userToken");
			setUserToken(null);
			setIsLogged(false);
		}
	};

	const getUserInfo = () => {
		if (isLogged){
			axios.get(
				"http://localhost:8888/api/auth/user",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${userToken}`,
					},
				},
			)
				.then(resp =>setUserInfo(resp.data))
			console.log(userInfo)
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
					setUserToken={setUserToken}
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
