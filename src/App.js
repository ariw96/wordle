import React from "react";
import Home from "./Home";
import { GameProvider } from "./components/GameContext";
import "./App.css";
function App() {
	return (
		<>
			<GameProvider>
				<h1 className="text-7xl">wordle</h1>
				<Home />
			</GameProvider>
		</>
	);
}
export default App;
