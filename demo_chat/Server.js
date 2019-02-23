var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(5000);

io.on("connection", function(socket){
    console.log(socket.id+" connected");
});

app.get("/", function(req, res){
    res.render("trangchu");
});