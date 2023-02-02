const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 3000;//얘를 client랑 같은 port로 놓으니까 자꾸 에러가 뜬다.

const router = require("./router.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection",(socket)=>{
    console.log("Connected");

    socket.on("join", ({name, room})=>{
        console.log(name, room);
    });

    socket.on("disconnect", ()=>{
        console.log("user left");
    });
});

app.use(router);

app.listen(PORT, ()=>{console.log(`Server started on ${PORT}`)});