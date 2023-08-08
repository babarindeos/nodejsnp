var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    fs.unlink('mynewfile2.txt', function(err){
        if (err){
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.write('500 Internal Server Error\n');
            console.log(err);
            //res.write(err);
            res.end();
        }else{
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.write('File Delete');
            res.end();
        }
    });

}).listen(3000, '127.0.0.1');

console.log("Server is running on 127.0.0.1:3000");
