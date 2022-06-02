import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoardLetter({ letter, id }) {
	const { addLetter, deleteLetter, enterWord} = useContext(GameContext);
	const displayLetter = () => {
		if (letter === "Ent") {
			enterWord(); //enterWord is a function in the GameContext object
		
		} else if (letter === "Del") {
			deleteLetter(); //deleteLetter is a function in the GameContext object
		} else {
			addLetter(letter); //addLetter is a function in the GameContext object and takes a letter as an argument
		}
	};
	return (
		//id is to define color of letter
		//onclick activate diff function for each letter and enter and delete
		<div className="key" onClick={displayLetter} id={id}>
			{letter}
		</div>
	);
}


export default KeyBoardLetter;
