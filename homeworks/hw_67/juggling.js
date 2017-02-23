
const http = require('http');
let allgets = [];
let counter = 0;

for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function callback(response) {
        response.setEncoding('utf-8');
        let alldata = '';
        response.on("data", function (data) {

            alldata += data;

        });

        response.on("end", function (data) {
            counter++;
            allgets[i - 2] = alldata;
            if (counter === (process.argv.length - 2)) {
                allgets.forEach(data => { console.log(data); });
            }

        });
        response.on('error', console.error);
    });
}

