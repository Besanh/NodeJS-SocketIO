var socket = io("http://localhost:5000");
socket.on("Server send register fail", function(){
    alert("Username has been registered");
});

socket.on("Server send register success", function(data){
    $("#curUser").html(data);
    $("#loginForm").hide(1000);
    $("#chatForm").show(1000);
});

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();
    $("#btnRegister").click(function(){
        socket.emit("Client send username", $("#txtName").val());
    });
});