import { useContext } from "react";
import { GameContext } from "./components/GameContext";
import GuessBoard from "./components/GuessBoard";
import KeyBoard from "./components/KeyBoard";
import GameStatus from "./components/GameStatus";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
function Home() {
	const { gameStatus } = useContext(GameContext);

	return (
		<>
			<NavBar />
			<SideBar />
			<GameStatus />
			<div id={gameStatus.theme}>
				<GuessBoard />
				<KeyBoard />
			</div>
		</>
	);
}

export default Home;
