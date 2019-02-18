var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "application/json"});
    var object = {
        ho : "Le",
        ten : "Anh",
        namsinh: 1996
    };

    // res.end->tra ve
    // JSON.stringify->JSON
    res.end(JSON.stringify(object));
}).listen(777);