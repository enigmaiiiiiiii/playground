import io from 'socket.io'

io(3000, {
  cors: {
    origin: ["http://localhost:8080"],
  }
})

io.on('connection', socket => {
  console.log(socket.id);
  socket.on("send-message", (message, room) => {
    console.log(message);
    if (room === '') {
      socket.broadcast.emit("receive-message", message);
    } else {
      socket.to(room).emit("receive-message", message);
    }
  })
  socket.on("join-room", room => {
    socket.join(room);
  })
})