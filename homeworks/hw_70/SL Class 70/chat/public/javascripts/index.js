(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messagesDiv = $('#messages');
    socket.on('message', msg => {
        console.log(msg);

        messagesDiv.append('<span>' + msg + '</span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });
}());