const http = require('http'),
    url = require('url');


let server = http.createServer(function callback(request, response) {

    const theUrl = url.parse(request.url, true),
            time = new Date(theUrl.query.iso);

  
    if (theUrl.pathname === '/api/parsetime') {
        
       let  result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        };
            response.end(JSON.stringify(result));
    } else if(theUrl.pathname === '/api/unixtime') {
      let  result = {
            unixtime: time.getTime()
        };
            response.end(JSON.stringify(result));
    }

    //response.end(JSON.stringify(result));
   // response.error('error');
    

}).listen(process.argv[2]);

server.on('error', function (e) {
  // Handle your error here
  console.log('e');
});