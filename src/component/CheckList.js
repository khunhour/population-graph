import React from "react";
import CheckBox from "./CheckBox";
import "../css/CheckList.css";
export default function CheckList({ pref, handleCheck }) {
	return (
		<div className="checkbox-background">
			<div className="checkbox-container">
				{pref.map((city) => (
					<CheckBox
						key={city.prefCode}
						city={city}
						handleCheck={handleCheck}
					/>
				))}
			</div>
		</div>
	);
}
