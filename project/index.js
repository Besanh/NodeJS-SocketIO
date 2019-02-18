var express = require("express");

// Dung body parser cho post
var bodyParser = require("body-parser");
var app = express();
app.listen(3100);
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));

// config EJS
app.set("view engine", "ejs");  // khao bao su dung template engine ejs
app.set("views", "./views");  // khai bao template nam trong view

app.get("/chitiet", function(req, res){
    res.render("chitiet", {hoten: "AnhLe", tuoi: 23});
});

app.get("/namsinh", function(req, res){
    res.render("chitiet", {hoten: [1996, 1997, 1998, 1999]});
});

app.get("/anhle", function(req, res){
    res.render("anhle");
});

app.get("/hello", function(req, res){
    res.send("<font color:red>Getting Hello Besanh</font>");
});

// username, password
app.post("/hello", urlencodedParser, function(req, res){
    var u = req.body.username;
    var p = req.body.password;

    res.send("Username: "+u+" Password "+p);
    //res.send("<font color:red>Posting Hello Besanh</font>");
});

app.get("/tintuc/:id", function(req, res){
    var i = req.params.id;
    res.send("Server nhan duoc id la "+ i);
});