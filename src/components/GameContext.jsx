import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { wordGenerater, randomWord } from "./Data";
export const GameContext = createContext();

export const GameProvider = (props) => {
	const defultBoard = [
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
		[
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
			{ letter: "", colorId: "" },
		],
	];
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
		{ letter: "C", colorId: "" },
		{ letter: "V", colorId: "" },
		{ letter: "B", colorId: "" },
		{ letter: "N", colorId: "" },
		{ letter: "M", colorId: "" },
		{ letter: "Ent" },
	];
	const [keyBoardState, setKeyBoardState] = useState(keyBoard);
	const [boardState, setBoardState] = useState(defultBoard); //used at gussing board
	const [curLetterPosition, setCurLetterPosition] = useState(0);
	const [curWordPosition, setCurWordPosition] = useState(0);
	const [wordSet, setWordSet] = useState(new Set());
	const correctWord = "stone";

	useEffect(() => {
		wordGenerater().then((words) => {
			console.log(words);
			setWordSet(words);
			
		});
	}, []);

	const enterWord = () => {
		if (curLetterPosition === 5) {
			const currentWord = boardState[curWordPosition].map((letter) => letter.letter).join("").toLowerCase();
			if(!wordSet.has(`${currentWord}\r`)){
			alert("correct");
			}
			const newWord = boardState[curWordPosition].map((word, index) => {
				const correctArray = correctWord.toLowerCase().split("");
				if (word.letter.toLowerCase() === correctWord[index].toLowerCase()) {
					correctArray[index] = "";
					keyBoardState.find((key) => key.letter === word.letter).colorId =
						"green";
					setKeyBoardState(keyBoardState);

					return { ...word, colorId: "green" };
				} else if (
					correctWord.toLowerCase().includes(word.letter.toLowerCase()) &&
					correctArray.includes(word.letter.toLowerCase())
				) {
					keyBoardState.find((key) => key.letter === word.letter).colorId =
						"yellow";
					setKeyBoardState(keyBoardState);
					return { ...word, colorId: "yellow" };
				} else {
					keyBoardState.find((key) => key.letter === word.letter).colorId =
						"gray";
					setKeyBoardState(keyBoardState);
					return { ...word, colorId: "gray" };
				}
			});
			setBoardState((prevBoard) => {
				return [
					...prevBoard.slice(0, curWordPosition),
					newWord,
					...prevBoard.slice(curWordPosition + 1),
				];
			});

			setCurWordPosition(curWordPosition + 1);
			setCurLetterPosition(0);
			console.log(keyBoardState);
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
