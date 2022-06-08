import { useContext } from "react";
import { GameContext } from "./GameContext";
import GuessBoard from "./GuessBoard";
import KeyBoard from "./KeyBoard";
import GameStatus from "./GameStatus";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { GameProvider } from "./GameContext";
function Home() {
	return (
		<>
			<GameProvider>
				<NavBar />
				{/* <SideBar /> */}
				<GameStatus />
				<GuessBoard />
				<KeyBoard />
			</GameProvider>
		</>
	);
}

export default Home;
