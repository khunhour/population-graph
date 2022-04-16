import React, { useEffect, useState } from "react";
import CheckList from "./component/CheckList";

export default function App() {
	const [checked, setChecked] = useState([]);
	const [pref, setPref] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// get the data from the api
			const data = await fetch(
				"https://opendata.resas-portal.go.jp/api/v1/prefectures",
				{
					method: "POST",
					headers: {
						"X-API-KEY": "apikey",
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				}
			);
			// convert the data to json
			const json = await data.json();
			// set state with the result
			setPref(json.result);
		};

		fetchData().catch(console.error);
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
