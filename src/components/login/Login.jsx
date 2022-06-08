import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
function Log() {
	const { login ,user} = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			await login(email, password);
			console.log("User logged in");
			navigate("/");
		} catch (e) {
			setError(e.message);
			alert(e.message);
		}
	};
	return (
		<>
			<div className="login">
				<div className=" flex login  h-screen justify-center">
					<div className=" p-6 rounded-lg place-self-center shadow-lg bg-white  mx-auto  ">
				
						<form onSubmit={handleSubmit}>
							<div className="form-group mb-6">
								<label className="form-label inline-block mb-2 text-gray-700">
									Current Email: {user?.email}
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
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group mb-6">
								<label className="form-label inline-block mb-2 text-gray-700">
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
								font-large
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Password"
								/>
							</div>
							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									/>
									<label className="form-check-label inline-block text-gray-800">
										Remember me
									</label>
								</div>
								<a
									href="#!"
									className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
								>
									Forgot password?
								</a>
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
								Sign in
							</button>
							<p className="text-gray-800 mt-6 text-center">
								Not a member?{" "}
								<Link to="signup">
									<a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
										Register
									</a>
								</Link>
							</p>
						</form>
						
					</div>
				</div>
			</div>
		</>
	);
}

export default Log;
