import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "./bookLogo.png";

const Header = () => {
	return (
		<div className="container">
			<div className="header bg-gradient-purple">
				<div className="logo">
					<NavLink to="/">
						<img className="header-image" src={logo} alt="books" />
					</NavLink>
					<h1>Booklovers</h1>
				</div>
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
							<NavLink className="sign-up" to="signup">
								Créer un compte
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
