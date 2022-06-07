import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [user, setUser] = useState({});
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
		return signOut(auth);
		setUser({});
	};
	return (
		<AuthContext.Provider value={{ creatUser, user, login, logout, setUser }}>
			{props.children}
		</AuthContext.Provider>
	);
};
