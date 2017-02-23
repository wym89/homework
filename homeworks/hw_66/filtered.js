var fs = require('fs');

const pathname = process.argv[2],
    extention = process.argv[3],
    readfile = fs.readdir(pathname, function callback(err, list) {
        if (err) {
            throw err;
        }

        filteredlist = list.filter(function (file) {
            return file.substr(file.lastIndexOf('.') ) === '.' + extention;
        });

        filteredlist.forEach(function (file) {
            console.log(file);

        });
       // console.log(filteredlist);
    });

