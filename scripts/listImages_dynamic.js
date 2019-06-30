const fs = require('fs');
const path = require('path');
const util = require('util');
var colors = require('colors');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function getDirs(location) {
	let arr = [];
	let files = await readdir(location);

	for (var i = 0; i < files.length; i++) {
		let fileStat = await stat(path.join(location, files[i]));

		if (fileStat.isDirectory()) {
			let subfiles = await readdir(path.join(location, files[i]));

			// Wenn Dateien im Ordner sind
			if (subfiles != null) {
				var item = {};

				// .DS_Store herausfiltern
				subfiles = subfiles.filter(e => e !== '.DS_Store');
				item.dir = files[i];
				item.files = subfiles;
				// item[files[i]] = subfiles;

				arr.push(item);
			} else {
				// arr.push(files[i]);
			}
		} else {
			// Here's no file so do nothing!
			// arr.push(files[i]);
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
			console.log('images exported successfully'.green);
		});
	} catch (e) {
		throw e;
	}
})();
