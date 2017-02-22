const http = require('http');

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf-8');
    var alldata = '';
    response.on("data", function(data){
       
        alldata+= data;

    });

     response.on("end", function(data){
       
        console.log(alldata.length);
        console.log(alldata);
        
    });
    response.on('error', console.error );
});