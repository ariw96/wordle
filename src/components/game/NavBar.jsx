import React from "react";
import { useContext } from "react";
import { GameContext } from "./GameContext";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../login/AuthContext";

function NavBar() {
	const { logout, user } = useContext(AuthContext);
	const { boardState, curWordPosition } = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object
	const handleLogout = async () => {
		try {
			await logout();
			window.location.reload();
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className="navbar md:flex ">
			<div className="text-4xl mx-1 p-2 ">
				{/* <ion-icon name="reorder-three-outline"></ion-icon> */}
			<ion-icon name="bar-chart-sharp"></ion-icon>
			<NavLink to="/howtoplay">
				<ion-icon name="help-circle-outline"></ion-icon>
			</NavLink>
				{/* <ion-icon name="settings-sharp"></ion-icon> */}
			</div>

			<div className="flex flex-row">
				<div className="title ">W</div>
				<div className="title">O</div>
				<div className="title">R</div>
				<div className="title">D</div>
				<div className="title">L</div>
				<div className="title">E</div>
			</div>

			<div className="text-4xl p-2">
				<NavLink to="/login" className="login">
					<ion-icon name="log-in-outline"></ion-icon>
				</NavLink>
				<ion-icon onClick={handleLogout} name="log-out-outline">
					logout
				</ion-icon>

			</div>
		</div>
	);
}

export default NavBar;
