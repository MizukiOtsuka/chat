const http = require("http");
const server = http.createServer();
const fs = require("fs");
const socketio = require("socket.io");

const port = 3000;

server.on("request", function(req, res){
    fs.readFile("./index.html", "utf8", function (err, data){
        if (err) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("page not found!");
            return res.end();
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    });
});

server.listen(port, function() {
    console.log('server runing on port' + port);
});
/*
const io = socketio.listen(server);
io.sockets.on("connection", function (socket){
    console.log(socket);
    socket.on("massage", function (data) {
        io.sockets.emit("from_server", {value: data.value});
    });
});//socketに対してイベントを登録していく*/