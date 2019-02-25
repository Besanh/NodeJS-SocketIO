var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(5000);

// Declare array to check user registered
var arrUsers  = ["aaa"];

io.on("connection", function(socket){
    console.log(socket.id+" connected");

    socket.on("Client send username", function(data){
        //console.log(data);

        // Check if user having in array
        if(arrUsers.indexOf(data) >= 0)
        {
            // Fail
            socket.emit("Server send register fail");
        }
        else
        {
            // Success
            arrUsers.push(data);
            socket.emit("Server send register success", data);
        }
    });
});

app.get("/", function(req, res){
    res.render("trangchu");
});