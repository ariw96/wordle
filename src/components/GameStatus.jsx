import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function GameStatus() {
	const { gameStatus,curWordPosition } = useContext(GameContext);
    if (gameStatus.gameWon){
        return <h1 className="text-4xl">You won!</h1>
    }
    else if (gameStatus.gameLost){
        return <h1 className="text-4xl">You lost!</h1>
    }
    
        return(
             <>
             <h1 className="text-4xl">You have {(6 - curWordPosition)} attempts left</h1>
             </>
             )
    
}

export default GameStatus;
