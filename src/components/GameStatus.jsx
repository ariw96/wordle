import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function GameStatus() {
	const { gameStatus, curWordPosition } = useContext(GameContext);
	if (true) {

		return (
			<>
				<div className="" id={gameStatus.card}>
					<h1 className="">{gameStatus.card}</h1>
					<h1 className="">You won 6 game</h1>
					<h1 className="">You play 5 gessedWord</h1>
				</div>
			</>
		);
	}
}

export default GameStatus;
