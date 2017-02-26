'use strict';

function zerobased(data) {
    if (data < 10){
        data = '0' + data;
        //console.log(data);
    }
  //  console.log(data + 'kkkin fuction');
    return data;
}

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
        socket.write(now.getFullYear() + '-' + zerobased(now.getMonth()+1) + '-' + zerobased(now.getDate()) + ' ');
        socket.write(now.getHours()  + ':' + now.getMinutes());
        socket.end('\n');
    }).listen(+process.argv[2]);


