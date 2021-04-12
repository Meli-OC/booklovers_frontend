import React from "react";

import "./Account.scss";

const Account = ({ username }, { emailInfo }) => {
	return (
		<div className="account_container">
			<div className="username">
				<h2>Pseudo:</h2>
				<p>{username}</p>
				{/*<h2>Email:</h2>*/}
				{/*<p>{emailInfo}</p>*/}
			</div>
		</div>
	);
};

export default Account;
