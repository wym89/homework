var fs = require('fs');

const file = process.argv[2],
      readfile = fs.readFileSync(file, 'utf-8'),
      fileArray = readfile.split('\n');

      console.log(fileArray.length-1);





