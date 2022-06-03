import React from "react";
import Home from "./Home";
import { GameProvider } from "./components/GameContext";
import "./App.css";
function App() {
	return (
		<>
			<GameProvider>
				<Home />
			</GameProvider>
		</>
	);
}
export default App;
