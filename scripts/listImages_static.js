const fs = require('fs');
const path = require('path');

var finalArray = [];

// Function: get dirs of specific folder
const getDirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

// The location to search in
const loc = './public/images/';
const dirs = getDirs(loc); // ["nature","people","landscapes"]

// Read filenames and add them to the dirObj

fs.readdir(loc + 'animals', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'animals';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'landscapes', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'landscapes';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'people', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'people';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'scenes', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'scenes';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});
fs.readdir(loc + 'science', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'science';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'space', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'space';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'art', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'art';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'technology', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'technology';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

fs.readdir(loc + 'private', (err, files) => {
	var dirObj = {};
	dirObj.dir = 'private';
	dirObj.files = [];
	files.forEach(file => {
		if (file !== '.DS_Store') {
			dirObj.files.push(file);
		}
	});
	finalArray.push(dirObj);
});

setTimeout(function() {
	const data = JSON.stringify(finalArray, null, 2);

	console.log(data);

	fs.writeFile('./src/assets/images.json', data, err => {
		if (err) throw err;
		console.log(data);
	});
}, 500);
