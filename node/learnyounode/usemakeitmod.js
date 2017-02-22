'use strict';
var filter = require('./makeitmod.js');


filter(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(f => console.log(f));
});
