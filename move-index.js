const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "index.html");
const testPath = path.join(__dirname, "__test__", "index.html");

fs.stat(rootPath, (err, stats) => {
  if (err && err.code === "ENOENT") {
    fs.rename(testPath, rootPath, (err) => {
      if (err) throw err;
      console.log("index.html moved to root folder");
    });
  } else if (stats && stats.isFile()) {
    fs.rename(rootPath, testPath, (err) => {
      if (err) throw err;
      console.log("index.html moved to __test__ folder");
    });
  } else 
    console.log("index.html not found in either location");
  
});
