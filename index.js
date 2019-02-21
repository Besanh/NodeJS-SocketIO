var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Tat ca request client gui len deu vao folder public
app.use(express.static("./public"));

var server = require("http").Server(app);

// Config socket io
var io = require("socket.io")(server);
server.listen(3000);

// Listen any client connect to server
io.on("connection", function(socket){
    console.log("connected "+socket.id);

    // Check disconnect
    socket.on("disconnect", function(){
        console.log(socket.id+" disconnected");
    });

    /**
     *  Listen client send data to server
     * Server send data to all client(include A)
    */
    socket.on("Client-send-data", function(data){
        console.log(data);
        //io.sockets.emit("Server-send-data", data+"777");

        /**
         * Client send data to server and server only send data to that client
         */
        socket.emit("Server-send-data", data+"222");
    });
});

app.get("/", function(req, res){
    res.render("trangchu");
});