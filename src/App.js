import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/users/components/login";
import SignUp from "./containers/users/components/signUp";
import Header from "./components/header";
import Home from "./containers/home";
import Footer from "./components/footer/Footer";
import "./assets/css/App.scss";

const App = (props) => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route component={Home} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
