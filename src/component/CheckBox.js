import React from "react";

export default function CheckBox({ city, handleCheck }) {
	return (
		<>
			<div>
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
		</>
	);
}
