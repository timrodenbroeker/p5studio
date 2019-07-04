const fs = require("fs");
const TextToSVG = require("text-to-svg");
const util = require("util");
var colors = require("colors");
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const source = "./public/fonts/";
const target = "./public/svg/";

const attributes = { fill: "#111111" };
const options = {
  x: 0,
  y: 0,
  fontSize: 72,
  anchor: "top",
  attributes: attributes
};

async function getfilenames() {
  return await readdir(source);
}

async function makeSVGs(files) {
  for (let i = 0; i < files.length; i++) {
    let filename = files[i];
    let svgobj = await TextToSVG.loadSync("./public/fonts/" + filename);
    let svg = svgobj.getSVG("AaBbCcDdEeRrGg", options);
    await fs.writeFile(target + filename + ".svg", svg, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  console.log("svgs created successfully".green);
}

async function runTheTrack() {
  let files = await getfilenames();
  await makeSVGs(files);
}

runTheTrack();
