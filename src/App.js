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
import { AppContext } from "./libs/contextLib"


const App = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userInfo, setUserInfo] = useState({});
	const [isLogged, setIsLogged] = useState(false);

	const getUserInfo = () => {
		const token = Cookie.get("token");
		axiosInstance
			.get("user/", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((resp) => {
				const info = resp.data;
				setUserInfo(info)
			})
			.catch((error) => console.error(`Error: ${error}`));
	};

	useEffect(() => {
		if(isLogged){
			getUserInfo();
		}
	}, [isLogged]);

	return (
		<Router>
			<div className="App">
				<AppContext.Provider value={{ isLogged, setIsLogged }}>
					<Header userInfo={userInfo} getUserInfo={getUserInfo}/>
					<Switch>
						<Route path="/login">
							<Login
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
							/>
						</Route>
						<Route path="/signup">
							<SignUp
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
							/>
						</Route>
						<Route path="/account">
							<Account userInfo={userInfo}/>
						</Route>
						<Route component={Home} />
					</Switch>
				</AppContext.Provider>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
