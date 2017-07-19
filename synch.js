const fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];
var file = fs.readFileSync(dir, 'utfu');

console.log(file);

