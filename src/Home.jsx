import { useContext } from "react";
import { GameContext } from "./components/GameContext";
import GuessBoard from "./components/GuessBoard";
import KeyBoard from "./components/KeyBoard";
import GameStatus from "./components/GameStatus";

function Home() {
    const { gameStatus, curWordPosition } = useContext(GameContext);
    


	return (
		<>

				<GameStatus />
        <div id={gameStatus.theme}>
				<GuessBoard />
				<KeyBoard />
        </div>
		
		</>
	);
}

export default Home;
