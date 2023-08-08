var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    fs.open('mynewfile2.txt', 'w', function(err, file){
        if (err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('500 Internal Server Error');
            res.end();
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Saved');
            console.log('File Saved');
        }
    });
}).listen(3000, '127.0.0.1');