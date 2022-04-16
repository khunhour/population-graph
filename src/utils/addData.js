export const addData = async (id) => {
	const data = await fetch(
		`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${id}`,
		{
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				"X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
			},
		}
	);
	const population = await data.json();
	return population.result.data[0];
};
