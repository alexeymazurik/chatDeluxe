var http = require('http'),
    express = require('express'),
    chatServer = require('./lib/chat-server');

var app = express();
app.use(app.router);
app.use(express.static(__dirname + '/public')); //юзаем цсс и скрипты

var server = http.createServer(app).listen('3000','127.0.0.1');
chatServer.listen(server);

app.get('/', function(req,res){
    res.sendfile(__dirname + '/view/index.html'); //посылаем индекс страницу
});

console.log('Server is listening at 3000...');