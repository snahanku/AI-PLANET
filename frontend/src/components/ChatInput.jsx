import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: '#fff',
        padding: '16px 20px',          // Increased padding
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderTop: '1px solid #ddd',
        zIndex: 10,
      }}
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question..."
        rows={2}                       // Optional: increase to 2 rows
        style={{
          flex: 1,
          padding: '12px 14px',
          fontSize: '15px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          resize: 'none',
          outline: 'none',
          minHeight: '25px',          // Set a taller min height
        }}
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          borderRadius: '50px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          minHeight: '25px'
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
