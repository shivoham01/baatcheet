const express = require('express')
const http = require("http");
const {Server} = require("socket.io");

const app = express()
const port = 3000;
const server = http.createServer(app);

// Socket.io and cors Setup
const io = new Server(server, {
    cors: {
        origin: [
            "https:/ashutosh.pro"
        ],
        methods: ["GET", "POST"],
    },
});

// Socket.io Connection
io.on("connection", (socket) => {
    // When user connect
    console.log("User connected:", socket.id);

    // Read for messages
    socket.on("send_message", (data) => {
        // Send to everyone
        io.emit("receive_message", data);
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});