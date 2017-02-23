'use strict';

const fs = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {
    ext = '.' + ext;

    fs.readdir(dir, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        callback(null, files.filter(f => path.extname(f) === ext));
    });
};


       

        
       // console.log(filteredlist);
   

