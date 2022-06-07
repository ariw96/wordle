import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";
function GeussBoardLetter({ wordNum, letterPos }) {
	const { boardState } = useContext(GameContext);
	const curLetter = boardState[wordNum][letterPos].letter;
	const color = boardState[wordNum][letterPos].colorId;
	return (
		<div className="letter" id={color}>
			{curLetter}
		</div>
	);
}

export default GeussBoardLetter;
