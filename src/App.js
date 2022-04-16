import React, { useEffect, useState } from "react";
import CheckList from "./component/CheckList";

export default function App() {
	const [checked, setChecked] = useState([]);
	const [pref, setPref] = useState([]);

	// get all cities name on component mount
	useEffect(() => {
		const fetchData = async () => {
			// get the data from the api
			const data = await fetch(
				"https://opendata.resas-portal.go.jp/api/v1/prefectures",
				{
					headers: {
						"Content-Type": "application/json;charset=UTF-8",
						"X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
					},
				}
			);
			const citiesName = await data.json();
			// set state with the result
			setPref(citiesName.result);
		};
		try {
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	// Add/Remove checked item from list
	const handleCheck = (event) => {
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	return (
		<>
			<CheckList handleCheck={handleCheck} />
		</>
	);
}
