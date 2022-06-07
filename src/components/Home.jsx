import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeGame from "./game/HomeGame";
import Login from "./login/Login";
import Signup from "./login/Signup";
import { AuthProvider } from "./login/AuthContext";
function Home() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<HomeGame />} />
					<Route path="/login" element={<Login />} />
					<Route path="/login/signup" element={<Signup />} />
				</Routes>
			</AuthProvider>
		</>
	);
}

export default Home;
