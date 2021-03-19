import {React, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./features/users/components/login";
import SignUp from "./features/users/components/signUp";
import Header from "./components/header";
import Home from "./components/home";
import "./App.scss";

const App= (props) => {

    const[homepage, setHomepage] = useState(true);

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Redirect to="home"/>
                </Switch>
                <Home />
            </div>
        </Router>
    )
}

export default App
