export const convertData = (selected) => {
	let dataArray = [];

	selected.forEach((city) => {
		let name = city.prefName;
		city.data.forEach((data) => {
			let obj = {};
			obj.year = data.year;
			obj[name] = data.value;
			let index = dataArray.findIndex((ele) => ele.year === data.year);
			// if there is no existing obj just add
			if (index === -1) {
				dataArray.push(obj);
			}
			// if there is existing obj merge it with the current obj
			else {
				dataArray[index] = { ...dataArray[index], ...obj };
			}
		});
	});
	// only allow data that is under the current year
	let today = new Date();
	let oldData = dataArray.filter((ele) => ele.year <= today.getFullYear());
	return oldData;
};
