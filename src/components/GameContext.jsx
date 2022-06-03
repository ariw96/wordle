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
	const [correctWord, setCorrectWord] = useState("ari");
	const[gameStatus,setGameStatus]=useState({
		gameOver: false,
		gameWon: false,
		gameLost: false,
		theme: "",
	});

	useEffect(() => {
		wordGenerater().then((words) => {
			console.log(words); // IF SOMEONE WANT TO SEE THE VALID WORDS
			setWordSet(words);
			setCorrectWord(randomWord(words).slice(0, 5)); //random word SET TO THE CORRECT WORD
		});
	}, []);

	const enterWord = () => {
		console.log(correctWord); // IF SOMEONE WANT TO SEE THE ANSWER
		if (curLetterPosition === 5) {
			const gessedWord = boardState[curWordPosition]
				.map((letter) => letter.letter)
				.join("")
				.toLowerCase();
			// if (!wordSet.has(`${gessedWord}\r`)) {
			// 	alert("no such word");
			// }
			const addWordToBoard = boardState[curWordPosition].map((word, index) => {
				const currentLetter = word.letter.toLowerCase();
				const correctArray = correctWord.split("");
				if (currentLetter === correctWord[index]) {
					correctArray[index] = "";
					keyBoardState.find((key) => key.letter === word.letter).colorId =
						"green";
					setKeyBoardState(keyBoardState);

					return { ...word, colorId: "green" };
				} else if (
					correctWord.includes(currentLetter) &&
					correctArray.includes(currentLetter)
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
					addWordToBoard,
					...prevBoard.slice(curWordPosition + 1),
				];
			});
              if (correctWord === gessedWord) {
				setGameStatus({
					gameOver: true,
					gameWon: true,
				});
			}
			
			if (curWordPosition === 5) {
				setGameStatus({
					gameOver: true,
					gameLost: true,
					theme:"fade-out" 
				});
			}
			setCurWordPosition(curWordPosition + 1);
			setCurLetterPosition(0);
		}else{
		alert("please enter 5 letters");
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
				gameStatus,
				addLetter,
				deleteLetter,
				enterWord,
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};
