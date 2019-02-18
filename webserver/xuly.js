var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/html"});

    // Cach 1: doc 1 luong data
    fs.createReadStream(__dirname+"/index.html", 'utf-8').pipe(res);

    // Cach 2
    // var data = fs.readFileSync(__dirname+'/index.html', 'utf-8');
    // data = data.replace("{NAME}", "AnhLe");
    // res.end(data);
}).listen(7777);