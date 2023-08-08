var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.writeFile('mynewfile3.txt', 'Hello this is a write operation, there is still more to it', function(err){
        if (err){
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.write('500 Internal Server Error');
            res.end();

        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Updated');
            res.end();
        }
    })
}).listen(3000, '127.0.0.1');

console.log("Server running on 127.0.0.1:3000");