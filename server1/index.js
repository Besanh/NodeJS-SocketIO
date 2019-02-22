var express = require("express");
var app = express();

// Use template engine
app.set("view engine", "ejs");
app.set("views","./views");

// Set all request run to folder public
app.use(express.static("./public"));

// Create server
var server = require("http").Server(app);

// Config socket io
var io = require("socket.io")(server);

// Server listen port 4000
server.listen(4000);

io.on("connection", function(socket){
    console.log(socket.id+" connected");

    // Server listen when client send data up
    socket.on("Client-send-color", function(data){
        console.log(data);
        io.sockets.emit("Server-send-color", data);
    });
});

// Create route
app.get("/", function(req, res){
    res.render("trangchu");
});