const fs = require('fs');
const path = require('path');
var dir = process.argv[2];
var ext = "."+process.argv[3];


fs.readdir(dir, (err, list) => {
    if(err) throw Error("cannot get this list", err);
    list.forEach((item)=>{
        if (path.extname(item) === ext) {
            console.log(item);
        }
    })
});