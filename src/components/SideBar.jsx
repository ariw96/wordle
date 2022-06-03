import React from "react";
import { useContext } from "react";
import { GameContext } from "./GameContext";
function SideBar() {
	const { boardState, curWordPosition } = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object

	return (
		<div className="fixed side-bar">
	
			<div className="flex flex-row text-4xl mt-6">
				<input
					className="placeholder:italic block bg-white  border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
					placeholder="Challenge A friend"
					type="text"
				/>
				<ion-icon name="share-social-outline"></ion-icon>
			</div>
		</div>
	);
}

export default SideBar;
