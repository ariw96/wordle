import React from "react";
import { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
	const word0 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word1 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word2 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word3 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word4 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word5 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];

	const defultBoard = [word0, word1, word2, word3, word4, word5];
	const keyBoard = [
       
		{ letter: "Q", colorId: "" },
		{ letter: "W", colorId: "" },
		{ letter: "E", colorId: "" },
		{ letter: "R", colorId: "" },
		{ letter: "T", colorId: "" },
		{ letter: "Y", colorId: "" },
		{ letter: "U", colorId: "" },
		{ letter: "I", colorId: "" },
		{ letter: "O", colorId: "" },
		{ letter: "P", colorId: "" },
		{ letter: "A", colorId: "" },
		{ letter: "S", colorId: "" },
		{ letter: "D", colorId: "" },
		{ letter: "F", colorId: "" },
		{ letter: "G", colorId: "" },
		{ letter: "H", colorId: "" },
		{ letter: "J", colorId: "" },
		{ letter: "K", colorId: "" },
		{ letter: "L", colorId: "" },
		{ letter: "Del" },
		{ letter: "Z", colorId: "" },
		{ letter: "X", colorId: "" },
		{ letter: "C", colorId: ""},
		{ letter: "V", colorId: "" },
		{ letter: "B", colorId: "" },
		{ letter: "N", colorId: "" },
		{ letter: "M", colorId: "" },
		{ letter: "Ent" },
	];
	const [geussedWord, setGeussedWord] = useState([]);
	const [keyBoardState, setKeyBoardState] = useState(keyBoard);
	const [boardState, setBoardState] = useState(defultBoard); //used at gussing board
	const [curLetterPosition, setCurLetterPosition] = useState(0);
	const [curWordPosition, setCurWordPosition] = useState(0);
	const [lettersHasBeenGuessed, setLettersHasBeenGuessed] = useState([]);
	const correctWord = "stone";

	const enterWord = () => {
		if (curLetterPosition === 5) {
			const newWord = boardState[curWordPosition].map((word, index) => {
				const correctArray = correctWord.toLowerCase().split("");
				if (word.letter.toLowerCase() === correctWord[index].toLowerCase()) {
					correctArray[index] = "";
					return { ...word, colorId: "correct" };
				} else if (
					correctWord.toLowerCase().includes(word.letter.toLowerCase()) &&
					correctArray.includes(word.letter.toLowerCase())
				) {
					return { ...word, colorId: "almost" };
				} else {
					return { ...word, colorId: "wrong" };
				}
			});
			setBoardState([...boardState.slice(0, curWordPosition), newWord, ...boardState.slice(curWordPosition + 1)]);
			setCurWordPosition(curWordPosition + 1);
			setCurLetterPosition(0);
		}
	};

	const deleteLetter = () => {
		if (curLetterPosition === 0) return;
		const newBoardState = [...boardState];
		newBoardState[curWordPosition][curLetterPosition - 1].letter = "";
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition - 1);
	};
	const addLetter = (letter) => {
		if (curLetterPosition === 5) return;
		const newBoardState = [...boardState];
		newBoardState[curWordPosition][curLetterPosition].letter = letter;
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition + 1);
	};

	return (
		<GameContext.Provider //value prop is the value of the context provider to be used by all the children components
			value={{
				boardState,
				keyBoardState,
				curWordPosition,
				addLetter,
				deleteLetter,
				enterWord,
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};
