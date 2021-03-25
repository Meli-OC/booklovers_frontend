import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./features/users/components/login";
import SignUp from "./features/users/components/signUp";
import Header from "./components/header";
import Home from "./features/home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";

const App = (props) => {
	const [token, setToken] = useState(null);

	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/login">
						<Login token={token} setToken={setToken} />
					</Route>
					<Route path="/signup" component={SignUp} />
					<Route component={Home} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
