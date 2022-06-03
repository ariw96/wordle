import React from "react";
import GeussBoardLetter from "./GeussBoardLetter";
import { useContext } from "react";
import { GameContext } from "./GameContext";
function GuessBoard() {
	const { boardState } = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object
	const row0 = boardState[0].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={0} letterPos={index} />;
	});
	const row1 = boardState[1].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={1} letterPos={index} />;
	});
	const row2 = boardState[2].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={2} letterPos={index} />;
	});
	const row3 = boardState[3].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={3} letterPos={index} />;
	});
	const row4 = boardState[4].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={4} letterPos={index} />;
	});
	const row5 = boardState[5].map((item, index) => {
		return <GeussBoardLetter key={index} wordNum={5} letterPos={index} />;
	});

	return (
		<>
		<div className="guess-board">
			<div className="word0">{row0}</div>
			<div className="word1">{row1}</div>
			<div className="word2">{row2}</div>
			<div className="word3">{row3}</div>
			<div className="word4">{row4}</div>
			<div className="word5">{row5}</div>
		</div>
		</>
	);
}

export default GuessBoard;
