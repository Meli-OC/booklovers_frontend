import React from "react";
import "./Home.scss";
import Books from "../books/Books";


const Home = () => {
	return (
		<div className="homepage-container">
			<div className="homepage">
				<h2>Bienvenue sur le site dédié aux amoureux des livres!</h2>
			</div>
			<div className="search">
				<form action="POST">
					<label htmlFor="search"></label>
					<input
						type="text"
						name="search"
						id="search"
						className="search-input"
						placeholder="Recherche"
					/>
					<button type="submit" className="btn-submit">
						Recherche
					</button>
				</form>
			</div>
			<Books />
		</div>
	);
};

export default Home;
