import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: 'Admin', text: 'Hi! How can I help you?' },
    { sender: 'User', text: 'I need support with login.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'User', text: input }]);
    setInput('');
  };

  return (
    <div style={{ width: '60%', margin: '0 auto', padding: '20px', border: '1px solid gray' }}>
      <div style={{ height: '200px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..." 
        style={{ width: '80%', marginRight: '10px' }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatWindow;
