var http = require('http'); // goi module http

// Khoi tao server
http.createServer(function(req, res){
    /**
     * req = request
     * res = response
     * 
     * 404,...
     * 200 OK la code truyen ve client
     * Khi goi toi server thi se tra ve chuoi Besanh
     * Open port 8888
     */
    res.writeHead(200, {"content-type": "text/plain"});
    res.end('Besanh');
}).listen(8888);