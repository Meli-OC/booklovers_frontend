import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import logo from "./bookLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ isLogged, setIsLogged, setUserToken, getUserInfo,  username}) => {
	const history = useHistory();


	// function for log out
	const handleLogout = () => {
		setUserToken("");
		setIsLogged(false);
		history.push("/");
	};

	return (
		<div className="container">
			<div className="header bg-gradient-purple">
				<div className="logo">
					<NavLink to="/">
						<img className="header-image" src={logo} alt="books" />
					</NavLink>
					<h1>Booklovers</h1>
				</div>
				{isLogged ? (
					<div className="links">
						<h2>Bonjour, {username}</h2>
						<ul>
							<li>
								<NavLink className="books" to="/">
									Livres
								</NavLink>
							</li>
							<li>
								<NavLink className="myAccount" to="/account" onClick={getUserInfo}>
									Mon Compte
								</NavLink>
							</li>
							<li>
								<button className="logout" onClick={handleLogout}>
									<FontAwesomeIcon icon={faSignOutAlt} />
								</button>
							</li>
						</ul>
					</div>
				) : (
					<div className="links">
						<ul>
							<li>
								<NavLink className="books" to="/">
									Livres
								</NavLink>
							</li>
							<li>
								<NavLink className="connection" to="/login">
									Connexion
								</NavLink>
							</li>
							<li>
								<NavLink className="sign-up" to="/signup">
									Créer un compte
								</NavLink>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
