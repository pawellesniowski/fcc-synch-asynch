const fs = require('fs');
const path = require('path');

module.exports = function (ext, dir, callback){
    fs.readdir(dir, (err, data)=>{
        var listArr = new Array();
        if(err) {
            callback(err);
        } else {
            data.forEach(item=>{
                if(path.extname(item)=== "."+ext){
                    listArr.push(item);
                }
            })
            
            callback(null, listArr);
        }
       
    });
};

