const express = require("express");
const app = express();
const cors = require('cors')
const http = require("http");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.WEB_APP_ENDPOINT,
    methods: ["GET", "POST"],
  },
});
console.log(process.env.WEB_APP_ENDPOINT)
app.get("/", (req, res) => {
  res.send("Welcome to chat backend service!");
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
