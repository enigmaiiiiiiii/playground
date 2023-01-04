const joinRoomButton = document.getElementById("room-button")
const messageInput = document.getElementBHyId("message-input");
const roomInput = document.getElementById("room-input");
const form = docuemnt.getElmentById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const message = messageInput.value
  const room = roomInput.value;

  if (message === "") return;
  displayMessage(message);
  socket.emit('send-message', message, room);

  messageInput.value = "";
})

joinRoomButton.addEventListener("click", () => {
  const room = roomInput.value;
})

function displayMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  document.getElementById("message-container");
}