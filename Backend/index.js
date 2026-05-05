const express = require('express')
const { Server } = require('socket.io');

const app = express()
const port = 3000;

// Socket.io Setup
const io = new Server(5000, {
    cors: {
        origin: "https://ashutosh.pro/baatcheet",
        credentials: true,
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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})