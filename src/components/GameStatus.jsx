import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function GameStatus() {
	const { gameStatus, curWordPosition } = useContext(GameContext);
	if (gameStatus.gameWon) {
		return (
			<>
				<div className="game-over-card fixed mx-auto">
					<h1 className="text-4xl">You won!</h1>
					<h1 className="text-4xl">You won 6 game</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="text-4xl">You play 5 gessedWord</h1>
					<h1 className="">You play 5 gessedWord</h1>
				</div>
			</>
		);
	} else if (gameStatus.gameLost) {
		return <h1 className="text-4xl">You lost!</h1>;
	}

	return <></>;
}

export default GameStatus;
