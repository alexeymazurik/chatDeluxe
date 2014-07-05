var socketio = require('socket.io');
var io;

exports.listen = function(server) {
    io = socketio.listen(server);
    io.set('log level', 2);
    io.sockets.on('connection', function(socket) {
        socket.on('send message', function(data){
            io.sockets.emit('new message', {msg: data});
        })
    });
}