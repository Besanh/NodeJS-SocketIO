/**
 * Flow chart register
 * 1. Client send username to server
 * 2. Server send register fail
 * 3. Server send register success
 * 4. Server send list users
 */

 /**
  * Flow chart log out
  * 1. Client send log out to server, server remove client from array
  * 2. Server send data notification to other user that client logged out
  * 3. Client logged out header to page login
  */
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(5000);

// Declare array to check user registered
var arrUsers  = [];

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
            socket.Username = data; // from me, set yourself
            socket.emit("Server send register success", data);
            io.sockets.emit("Server send list user", arrUsers);
        }
    });

    socket.on("Log out", function(data){
        arrUsers.splice(
            arrUsers.indexOf(socket.Username), 1
        );
        socket.broadcast.emit("Server send list user", arrUsers);
    });
});

app.get("/", function(req, res){
    res.render("trangchu");
});