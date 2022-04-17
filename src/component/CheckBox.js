import React from "react";
import "../css/Checkbox.css";

export default function CheckBox({ city, handleCheck }) {
	return (
		<div className="checkbox">
			<label>
				<input
					id={city.prefCode}
					value={city.prefName}
					name={city.prefName}
					type="checkbox"
					onChange={handleCheck}
					checked={city.checked}
				/>
				{city.prefName}
			</label>
		</div>
	);
}
