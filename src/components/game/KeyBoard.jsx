import React, { useCallback, useEffect } from "react";
import KeyBoardLetter from "./KeyBoardLetter";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoard() {
	const { addLetter, deleteLetter, enterWord, keyBoardState ,gameStatus } =
		useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object

	const handleKeyPress = useCallback(
		(e) => {
			//useCallback to prevent memory leak and prevent rerendering for every key press to good performance
			if (e.key === "Enter") {
				enterWord(); //enterWord is a function in the GameContext object
				return;
			} else if (e.key === "Backspace") {
				deleteLetter(); //deleteLetter is a function in the GameContext object
				return;
			} else {
				keyBoardState.forEach((item) => {
					//instead checking each key press, we check the rows arrary and add the letter to the boardState if it matches the key pressed
					if (e.key.toLowerCase() === item.letter.toLowerCase()) {
						//toLowerCase() to make sure the key is lowercase
						addLetter(item.letter); //addLetter is a function in the GameContext object and takes a letter as an argument
					}
				});
			}
		},
		[keyBoardState, addLetter, deleteLetter, enterWord]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress); //add event listener to the document to listen for key presses
		return () => {
			document.removeEventListener("keydown", handleKeyPress); //clean up the event listener when the component is unmounted
		};
	}, [handleKeyPress]); //useEffect to add and remove event listener
	const row1 = keyBoardState.map((item, index) => {
		if (index > 9) return;
		return (
			<KeyBoardLetter key={index} letter={item.letter} id={item.colorId} />
		);
	});
	const row2 = keyBoardState.map((item, index) => {
		if (index < 10 || index > 18) return;
		return (
			<KeyBoardLetter key={index} letter={item.letter} id={item.colorId} />
		);
	});
	const row3 = keyBoardState.map((item, index) => {
		if (index < 19) return;
		return (
			<KeyBoardLetter key={index} letter={item.letter} id={item.colorId} />
		);
	});
	return (
		<div className="keyboard" id={gameStatus.theme} onKeyDown={() => handleKeyPress}>
			<div className="row1">{row1}</div>
			<div className="row2">{row2}</div>
			<div className="row3">{row3}</div>
		</div>
	);
}

export default KeyBoard;
