import React from "react";

import "./Account.scss";

export default function Account(userInfo) {
	const displayInfo = (userInfo) => {
		const info = userInfo.userInfo;
		console.log(info);
		return (
			<div className="account_container" key={info._id}>
				<div className="username">
					<h2>Pseudo:</h2>
					<p>{info.username}</p>
					<h2>Email:</h2>
					<p>{info.email}</p>
				</div>
			</div>
		);
	};
	return <>{displayInfo(userInfo)}</>;
}
