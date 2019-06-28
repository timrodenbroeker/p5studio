const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function getDirs(location) {
	let arr = [];
	let files = await readdir(location);
	for (var i = 0; i < files.length; i++) {
		let fileStat = await stat(path.join(location, files[i]));
		if (fileStat.isDirectory()) {
			let subfiles = await readdir(path.join(location, files[i]));
			if (subfiles != null) {
				var item = {};
				item[files[i]] = subfiles;
				arr.push(item);
			} else {
				arr.push(files[i]);
			}
		} else {
			arr.push(files[i]);
		}
	}
	return arr;
}

const loc = './public/images/';

(async () => {
	try {
		let list = await getDirs(loc);
		const data = JSON.stringify(list, null, 2);

		fs.writeFile('./src/assets/images.json', data, err => {
			if (err) throw err;
			console.log(data);
		});
	} catch (e) {
		throw e;
	}
})();
