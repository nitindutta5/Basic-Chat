const express = require("express");
const app = express();
const cors = require('cors')
const http = require("http");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://31b1-111-223-27-240.ngrok.io/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket)=>{
  console.log("connected", socket.id)
    socket.on("chat", (data)=> {
      console.log(data);
        io.emit("chat", data)
})});

server.listen(3001,() =>{
    console.log("Server is running")
})  
