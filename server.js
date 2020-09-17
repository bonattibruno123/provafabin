var http = require('http');
var app = require('./config/express')();
var port = process.env.PORT || 8080;
http.createServer(app).listen(port), function(){
    console.log('Express Server escutando na porta' + port);
};