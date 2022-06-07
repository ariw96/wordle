import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function GameStatus() {
	const { gameStatus, curWordPosition } = useContext(GameContext);

	if (gameStatus.game === "Won") {
		return (
			<>
				<div className="game-over-card">
					<h1>You {gameStatus.game}!</h1>
					<div className="text-5xl"> Number of streaks {curWordPosition}</div>
                <button className=" bg-green-500 font-semibold text-white py-2 px-2  rounded-xl" onClick={() => window.location.reload()}>Restart</button>
				</div>
			</>
		);
	}
    else if (gameStatus.game === "Lose") {
        return (
            <>
                <div className="game-over-card ">
                    <h1>You {gameStatus.game}! nice try</h1>
                    <p className="text-5xl my-2"> The answer was </p>
                    <p className="text-6xl font-bold my-2">{gameStatus.answer}</p>
                    <button className=" my-2 bg-green-500 font-semibold text-white py-2 px-2  rounded-xl" onClick={() => window.location.reload()}>Restart</button>
                </div>
            </>
        );
    }

}

export default GameStatus;
