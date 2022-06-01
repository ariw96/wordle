import React from "react";
import "./App.css";
import GuessBoard from "./components/GuessBoard";
import KeyBoard from "./components/KeyBoard";
import { GameProvider } from "./components/GameContext";

function App() {
	return (
		<>
			<h1>wordle</h1>
			<GameProvider>
				<GuessBoard />
				<KeyBoard />
			</GameProvider>
		</>
	);
}
export default App;
