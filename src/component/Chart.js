import React from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { colors } from "../utils/colors";

function Chart({ data }) {
	let lines = [];
	if (data.length !== 0) {
		lines = Object.keys(data[0]);
		lines.shift();
	}

	return (
		<ResponsiveContainer width="99%" aspect={3}>
			<LineChart
				width={600}
				height={500}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 50,
					bottom: 10,
				}}
			>
				<XAxis dataKey="year" />
				<YAxis />
				{lines.map((city, index) => {
					return (
						<Line
							type="monotone"
							dataKey={city}
							stroke={colors[index]}
						/>
					);
				})}
			</LineChart>
		</ResponsiveContainer>
	);
}

export default Chart;
