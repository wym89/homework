(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messagesDiv = $('#messages');
    socket.on('message', data => {
        console.log(data);

        messagesDiv.append('<span>'+data.name+ ' ' + data.message + '</span><br/>');
    });

    socket.on('newuser', data => {
        //console.log(data);

        messagesDiv.append('<span>' + data + 'has joined the chat</span><br/>');
    });

    socket.on('disconnect', data => {
        //console.log(data);

        messagesDiv.append('<span>' + data.name + 'has left the chat</span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message',   messageInput.val());
        messageInput.val('');
    });

    $('#loginForm').submit(e => {
         e.preventDefault();
         socket.emit('name', $('#name').val());
          $('#chatbox').show();
          $('#loginForm').hide();
        
    });

}());