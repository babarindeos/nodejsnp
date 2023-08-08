var http = require('http');
var url = require('url');
var path = require('path');

http.createServer(function(req, res){

    var uri = url.parse(req.url, true)
    var qdata = uri.query;
    var txt = qdata.name
    res.end(txt);
    console.log(txt);
    //console.log(uri);
   
    res.end();

}).listen(3000, '127.0.0.1');

console.log("Server listening on 127.0.0.1");