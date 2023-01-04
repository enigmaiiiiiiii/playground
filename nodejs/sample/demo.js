import { WebSocketServer } from "ws";
import fs from "fs";

const server = new WebSocketServer({ port: 3000 });
const content = fs.readFileSync("index.html");


server.on("connection", (socket) => {

  socket.on('message', (message) => {
    console.log(`Received message => ${message}`);
  })

});

