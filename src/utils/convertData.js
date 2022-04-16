export const convertData = (selected) => {
	let dataArray = [];

	selected.forEach((city) => {
		let name = city.prefName;
		city.data.forEach((data) => {
			let obj = {};
			obj.year = data.year;
			obj[name] = data.value;
			let index = dataArray.findIndex((ele) => ele.year == data.year);
			if (index === -1) {
				dataArray.push(obj);
			} else {
				dataArray[index] = { ...dataArray[index], ...obj };
			}
		});
	});
	return dataArray;
};
