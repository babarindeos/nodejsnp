var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    fs.appendFile('mynewfile.txt', 'Hello Nodejs', function(err){
        if (err){
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.write('500 Internal Server Error');
            res.end();
            return;
        }else{
            console.log('File Saved');
        }

        fs.readFile('mynewfile.txt', function(err, data){
            if (err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('500 Internal Server Error');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                console.log(data);
                res.write(data);
                res.end();
            }
        });
        
    });

    

}).listen(3000, '127.0.0.1');

console.log('Server is running at 127.0.0.1:3000');