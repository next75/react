import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", socket => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on('chat message', (msg) => {
        console.log("message: " + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
