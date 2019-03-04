var socket = io("http://localhost:5000");
socket.on("Server send register fail", function(){
    alert("Username has been registered");
});

socket.on("Server send register success", function(data){
    $("#curUser").html(data);
    $("#loginForm").hide(1000);
    $("#chatForm").show(1000);
});

/**
 * Listen to view users are online
 * Refresh list user if client reload page
 */
socket.on("Server send list user", function(data){
    $("#boxContent").html("");
    data.forEach(function(i){
        $("#boxContent").append("<div class='user'>" + i + "</div>");
    });
});

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();
    $("#btnRegister").click(function(){
        socket.emit("Client send username", $("#txtName").val());
    });
    $("#btnLogout").click(function(){
        socket.emit("Log out");
        $("#chatForm").hide(1000);
        $("#loginForm").show(1000);
    });
});