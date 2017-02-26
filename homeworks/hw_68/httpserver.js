const http = require('http'),
        fs = require('fs');
        

http.createServer( function callback(request, response){
    rs = fs.createReadStream(process.argv[3]);
    rs.pipe(response);



}).listen(process.argv[2]);