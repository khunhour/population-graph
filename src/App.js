import React, { useEffect, useState } from "react";
import Chart from "./component/Chart";
import CheckList from "./component/CheckList";
import { addData } from "./utils/addData";
import { convertData } from "./utils/convertData";
import "./css/App.css";

export default function App() {
	const [pref, setPref] = useState([]);
	const [selected, setSelected] = useState([]);
	const [chartData, setChartData] = useState([]);

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
			const jsonData = await data.json();
			// set state with the result
			let citiesName = [...jsonData.result];
			citiesName.forEach((obj) => {
				obj.checked = false;
			});
			setPref(citiesName);
		};
		try {
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	// convert selected data every time it changes
	useEffect(() => {
		const data = convertData(selected);
		setChartData(data);
	}, [selected]);

	// Add/Remove checked item from list
	const handleCheck = async (event) => {
		let code = +event.target.id;

		// update pref state for checked
		setPref((prevPref) => {
			return prevPref.map((city) => {
				if (city.prefCode === code) {
					return { ...city, checked: !city.checked };
				}
				return city;
			});
		});

		// update selected state
		if (event.target.checked) {
			const data = await addData(code);
			data.prefCode = code;
			data.prefName = event.target.value;
			setSelected((prevPref) => [...prevPref, data]);
		} else {
			const updateSelected = selected.filter(
				(city) => city.prefCode !== code
			);
			setSelected([...updateSelected]);
		}
	};

	return (
		<main>
			<header>日本の人口</header>
			<h3 className="title">都道府県</h3>
			<CheckList pref={pref} handleCheck={handleCheck} />
			<h3 className="title">人口グラフ</h3>
			<Chart data={chartData} />
		</main>
	);
}
