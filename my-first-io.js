const fs = require("fs");
const str = fs.readFileSync(process.argv[2]);
const str2 = str.toString();
var lines = str2.split(/\n/).length - 1;
console.log(lines);
