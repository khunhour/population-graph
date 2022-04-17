import React from "react";
import {
	Label,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { colors } from "../utils/colors";

function Chart({ data }) {
	let lines = [];
	if (data.length !== 0) {
		lines = Object.keys(data[0]);
		lines.shift();
	}

	return (
		<ResponsiveContainer width="99%" height={500}>
			<LineChart
				width={600}
				height={500}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 50,
					bottom: 40,
				}}
			>
				<XAxis dataKey="year">
					<Label value="年度" position="bottom" />
				</XAxis>
				<YAxis angle={-55}>
					<Label value="人口数" position="left" angle={-90} />
				</YAxis>
				<Tooltip />
				<Legend
					style={{ bottom: "20px" }}
					layout="horizontal"
					verticalAlign="top"
				/>
				{lines.map((city, index) => {
					return (
						<Line
							// type="monotone"
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
