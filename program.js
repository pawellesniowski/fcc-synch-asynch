const fs = require('fs');
const path = require('path');

var module = require('./mymodule');
var dir = process.argv[2];
var ext = process.argv[3];

module(dir, ext, function(err, data){
    if(err) {
        console.log(err);
    } else {
        // arrList.forEach(item=>console.log(item));
        for( var i=0; i<data.length; i++ ){
      console.log(data[i]);
    }
    }
 
});

