var http = require('http');

var server = http.createServer( function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write('<html><body><p>This is home page.</p></body></html>');
        res.end();
    }
    else if(req.url == '/students'){
        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write('<html><body><h1>This is Student page.</h1></body></html>');
        res.end();
    }
    else if(req.url == '/data'){
        res.writeHead(200, {'Content-Type' : 'application/json'});

        res.write(JSON.stringify({message: "Hello world!"}));
        res.end();
    }
    else{
        res.end('Invalid Request !!!');
    }
})
server.listen(5000);
console.log("server listening on port 5000");