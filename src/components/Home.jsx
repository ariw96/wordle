import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeGame from "./game/HomeGame";
import Login from "./login/Login";
import Signup from "./login/Signup";
import { AuthProvider } from "./login/AuthContext";
import UserData from "./UserData";
import HowToPlay from "./pages/HowToPlay";
function Home() {

	return (
		<>
		{/* <UserData/> */}
			<AuthProvider>
				<Routes>
					<Route path="/" element={<HomeGame />} />
					<Route path="/login" element={<Login />} />
					<Route path="/login/signup" element={<Signup />} />
					<Route path="/howtoplay" element={<HowToPlay/>} />

				</Routes>
			</AuthProvider>
		</>
	);
}

export default Home;
