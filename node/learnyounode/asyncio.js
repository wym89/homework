var fs = require('fs');

const file = process.argv[2],
    readfile = fs.readFile(file, 'utf-8', function callback(err, data) {
        if (err) {
            throw err;
        }

        fileArray = data.split('\n');

        console.log(fileArray.length - 1);
    });
    


