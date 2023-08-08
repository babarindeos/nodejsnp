var http = require('http');
var fs = require('fs');
const { error } = require('console');

http.createServer(function(req, res){
    try{
        fs.readFile('demofile2.html', function(err, data){
            if (err){
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.write('500 Internal Server Error');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                res.end();
            }

           
        });

    }catch(e){
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
    }
    

    

}).listen(3000, '127.0.0.1');

console.log("Server is running at 127.0.0.1:3000")