import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [user, setUser] = useState({});
	const api = "https://wordle-user-api.herokuapp.com";
	const [userData, setUserData] = useState([]);
	const[ data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(api);
                // setData(response.data.users);
				console.log(response.data.users);
			} catch (error) {
				alert(error);
			}
		};
		getData();
		setLoading(false);
	}, []);
	const creatUser = (email, password) => {
		
		return createUserWithEmailAndPassword(auth, email, password);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);
	const login = (email, password) => {
       

		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		setUser({});
		return signOut(auth);
	};
	return (
		<AuthContext.Provider value={{ creatUser, user, login, logout, setUser }}>
			{props.children}
		</AuthContext.Provider>
	);
};
