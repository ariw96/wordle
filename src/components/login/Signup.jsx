import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { creatUser ,user} = useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await creatUser(email, password);
			console.log("User created");
			navigate("/");
		} catch (e) {
			setError(e.message);
			alert(e.message);
		}
	
	};
	return (
		<div  >
			 <h1>
        email:{}
    </h1>
		<div className="signup flex-col login  h-screen justify-center">
			<div className="justify-center flex " >
				<div className="p-6  rounded-lg shadow-lg bg-white max-w-sm">
					<form 
					onSubmit={handleSubmit}
					>
						<div className="form-group mb-6">
							<label className="form-label inline-block mb-2 text-gray-700">
								Email address
							</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInputEmail2"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							></input>
						</div>
						<div className="form-group mb-6">
							<label
								htmlFor="exampleInputPassword2"
								className="form-label inline-block mb-2 text-gray-700"
							>
								Password
							</label>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInputPassword2"
								placeholder="Password"
							></input>
						</div>
						<div className="flex justify-between items-center mb-6">
							<div className="form-group form-check"></div>
						</div>
						<button
							type="submit"
							className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Signup;
