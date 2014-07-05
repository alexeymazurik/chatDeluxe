jQuery(function($){


    var socket = io.connect();


    $('#sendMsg').on('submit', function(e) {
        e.preventDefault();
        socket.emit("send message", $('#msgBox').val());
        $('#msgBox').val('');
    });


    socket.on('new message', function(data) {
        debugger;
        displayMsg(data.msg);
    });

    function displayMsg(msg) {
        html = msg + "<br/>"
        $(chat).append(html);
    }


});