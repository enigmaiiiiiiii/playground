import { Server }  from 'socket.io'
import uuid from 'uuid';

const io = new Server(3000, {
  cors: {
    origin: ["http://localhost:8080"]
  }
});

io.engine.on("headers", (headers, req) => {
  headers["test"] = "123";
});

io.engine.generateId(req => {
  return uuid.v4();
});

io.on('connection', (socket) => {

  console.log(socket.id);
  console.log(`client number: ${io.engine.clientsCount}`);

  socket.on("send-message", (...data) => {
    console.log(data[0]);
    console.log(data[1]);
    const message = data[0];
    const room = data[1];
    if (room === '') {
      socket.broadcast.emit("receive-message", message);
    } else {
      socket.to(room).emit("receive-message", message);
    }
  });

  socket.on("join-room", room => {
    console.log(`socket ${socket.id} joined room ${room}`);
    socket.join(room);
  });

  socket.on("custom-message", (message) => {
    console.log(message);
  });

  // disconnect
  socket.on('disconnect', () => {
    console.log('disconnect');
  })
})
