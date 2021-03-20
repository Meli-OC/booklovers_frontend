import React from "react";

const Home = () => {
	return (
		<div className="container">
			<div className="homepage">
				<h1>Bienvenue sur le site dédié aux amoureux des livres!</h1>
			</div>
			<div className="search">
				<form action="POST">
					<label htmlFor="search"></label>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Recherche"
					/>
					<button type="submit" className="btn-submit">
						Recherche
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
