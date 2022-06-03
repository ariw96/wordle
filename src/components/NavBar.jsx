import React from "react";
import { useContext } from "react";
import { GameContext } from "./GameContext";

function NavBar() {
    const { boardState, curWordPosition } = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object

	return (
		<div className="navbar md:flex ">
			<div className="text-4xl mr-1 p-2 ">
				<ion-icon name="reorder-three-outline"></ion-icon>
				<ion-icon name="help-circle-outline"></ion-icon>
				<ion-icon name="settings-sharp"></ion-icon>
                <span className="title num-title fixed" id="yellow">
					{6 - curWordPosition}
				</span>
			</div>

			
             <div className="flex flex-row">

                <div className="title ">
                    W
                </div>
                <div className="title">
                    O
                </div>
                <div className="title">
                    R
                </div >
                <div className="title">
                    D
                </div>
                <div className="title">
                    L
                </div>
                <div className="title">
                    E
             
            </div>
             </div>

			<div className="text-3xl mx-2 p-2">
            <ion-icon name="log-in-outline"></ion-icon>
            <ion-icon name="shuffle-outline"></ion-icon>
                <ion-icon name="reload-outline"></ion-icon>
				<ion-icon name="bar-chart-sharp"></ion-icon>

			</div>
		</div>
	);
}

export default NavBar;
