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
    console.log("connected");
});

app.get("/", function(req, res){
    res.render("trangchu");
});