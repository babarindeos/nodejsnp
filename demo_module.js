var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("The current date and time is " + dt.myDateTime());
    res.end();
}).listen(3000);

console.log("Server is running on port 3000")