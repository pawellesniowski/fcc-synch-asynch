const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
    fs.readdir(dir, (err, data)=>{
        var arrList = new Array();
        if(err) {
            callback(err);
        } else {
            data.forEach(item=>{
                if(path.extname(item)==="."+ext){
                    arrList.push(item);
                }
            });
            callback(null, arrList);
        };
       
    });
};
