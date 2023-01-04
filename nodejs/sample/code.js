window.onload = function() {

  const form = document.getElementById('message-form');
  const messageField = document.getElementById('message');
  const messagesList = document.getElementById('messages');
  const socketStatus = document.getElementById('status');
  const closeBtn = document.getElementById('close');

  form.onsubmit = function (e) {
    e.preventDefault();

    // Retrieve the message from the textarea.
    const message = messageField.value;

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +
                            '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;
  }

  const socket = new WebSocket('ws://localhost:3000');

  socket.onopen = function (event) {
    socketStatus.innerHTML = 'Connected to:' + event.currentTarget.url;
    socketStatus.className = 'open';
  };

  socket.onerror = function (error) {
    console.log('WebSocket Error: ' + error);
  }

  closeBtn.onclick = function(e) {
    e.preventDefault();
    socket.close();
    return false;
  }
};


