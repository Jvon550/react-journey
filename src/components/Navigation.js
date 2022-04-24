import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

const Navigation = () => {
	const iconStyle = {
		borderRadius: "50%",
		height: "200px",
		width: "200px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Stack direction="horizontal" className="p-5 border" gap={3}>
			<div className="bg-light border" style={iconStyle}>
				First item
			</div>
			<div className="bg-light border ms-auto">Profile</div>
			<div className="bg-light border">Logout</div>
		</Stack>
	);
};

export default Navigation;
