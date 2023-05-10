import React, { useState } from 'react'
import ChatRoom from './ChatRoom';

function App() {

  const [roomId, setroomId] = useState('general');

  return (
    <div className="App">
      <label>
        Choose the chat room: {' '}
        <select
          value={roomId}
          onChange={e => setroomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}

export default App;
