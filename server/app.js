var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(3000);

// routing
app.get("/", function(req, res){
    //res.send("<font color=red>Hello World</font>");
    res.sendFile(__dirname+'/index.html');
});

// routing
app.get("/gioithieu.aspx", function(req, res){
    res.send("KAKAKAKA");
});

// tham so la co :
app.get("/tinhtong/:so1/:so2", function(req, res){
    var n = req.params.so1;
    n = parseInt(n);
    var m = req.params.so2;
    m = parseInt(m);

    var tong = n+m;
    res.send("<h1>"+tong+"</h1>");
});