const testFolder = './public/fonts/';
const fs = require('fs');

var arr = [];

fs.readdir(testFolder, (err, files) => {
	files.forEach(file => {
		arr.push(file);
	});

	let data = JSON.stringify(arr, null, 2);

	fs.writeFile('./src/assets/fonts.json', data, err => {
		if (err) throw err;
		console.log('Data written to file');
	});
});
