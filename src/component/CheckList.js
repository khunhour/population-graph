import React from "react";
import CheckBox from "./CheckBox";

export default function CheckList({ pref, handleCheck }) {
	return (
		<>
			{pref.map((city) => (
				<CheckBox
					key={city.prefCode}
					city={city}
					handleCheck={handleCheck}
				/>
			))}
		</>
	);
}
