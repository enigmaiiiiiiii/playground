import { io } from "socket.io-client";

const socket = io("http://localhost:3000");  // shake hands

socket.on("connect", () => {
  console.log("connected");
  displayMessage(`You connected with id: ${socket.id}`);
})

socket.on('receive-message', message => {
  displayMessage(message);
})


const joinRoomButton = document.getElementById("room-button")
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");

// send message
form.addEventListener("submit", e => {
  e.preventDefault();
  const message = messageInput.value;  // text input value
  const room = roomInput.value;

  if (message === "") return;
  displayMessage(message);

  socket.emit('send-message', message, room);
  messageInput.value = "";

})

joinRoomButton.addEventListener("click", () => {
  const room = roomInput.value;
  socket.emit("join-room", room);
})

function displayMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  document.getElementById("message-container").append(div)
}

document.addEventListener('keydown', e => {
  if (e.target.matches('input')) return;

  if (e.key === 'e') {
    console.log("connect establish");
    socket.connect();
  }
  if (e.key === 'd') {
    console.log('disconnect')
    socket.disconnect();
  }
});