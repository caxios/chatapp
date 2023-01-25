const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection",(socket)=>{
    console.log("Connected");

    socket.on("disconnect", ()=>{
        console.log("user left");
    });
});

app.use(router);

app.listen(PORT, ()=>{console.log(`Server started on ${PORT}`)});