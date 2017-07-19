const fs = require('fs');
const path = require('path');

var module = require('./module.js');
var dir = process.argv[2];
var ext = "txt";


module(ext, dir, function(err, listArr){
    if(err) {
        console.log(err);
    } else {
        listArr.forEach(item => console.log(item));
    }
 
});
