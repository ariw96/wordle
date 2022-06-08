import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserData() {
	const api = "https://wordle-user-api.herokuapp.com";
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const postData = async () => {
			setLoading(true);
			try {
				const response = await axios.post(api, {
					name: "",
					score: 0,
				});
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		postData();
		setLoading(false);
	}, []);
	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(api);
                setData(response.data.users);
				console.log(response.data.users);
			} catch (error) {
				alert(error);
			}
		};
		getData();
		setLoading(false);
	}, []);
	return <div>
	<h1>email: {data[0]?.email}</h1>
	<h1>data-length: {data.length}</h1>
	</div>;
}

export default UserData;
