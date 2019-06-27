const fs = require('fs');
const path = require('path');

const fontsFolder = './public/fonts/';

var arr2 = [];

fs.readdir(fontsFolder, (err, files) => {
	files.forEach(file => {
		if (file !== '.DS_Store') {
			arr2.push(file);
		}
	});

	let data = JSON.stringify(arr2, null, 2);

	fs.writeFile('./src/assets/fonts.json', data, err => {
		if (err) throw err;
		console.log('Data written to file', data);
	});
});
