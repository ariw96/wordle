import React from "react";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";

import "./App.css";
function App() {
	return (
		<>
		<BrowserRouter>
				<Home />
		</BrowserRouter>
		
		</>
	);
}
export default App;
