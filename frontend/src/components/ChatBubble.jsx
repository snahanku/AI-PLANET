import React from 'react';

const ChatBubble = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
      }}
    >
      <div
      
        style={{
          maxWidth: '70%',
          padding: '10px 15px',
          borderRadius: '15px',
          backgroundColor: isUser ? '#DCF8C6' : '',
          color: '#333',
          fontSize: '14px',
          marginLeft: isUser ? 'auto' : '30px',
          marginRight: isUser ? '0px' : 'auto',
        }}
      > 
       
       {!isUser ? (
  <div style={{ display: 'flex', alignItems: 'flex-start', margin: '10px 0' }}>
    {/* Assistant Icon */}
    <div style={{ minWidth: '40px', marginRight: '10px' }}>
      <img
        src="/ai.png"
        alt="assistant icon"
        style={{
          width: '40px',
          height: '40px',
          marginTop: '4px'
        }}
      />
    </div>

    {/* Assistant Message Bubble */}
    <p
      style={{
        fontFamily: '"Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
        fontSize: '16px',
        color: '#1a1a1a',
        backgroundColor: '#E5E4E2',
        padding: '12px 16px',
        borderRadius: '16px',
        maxWidth: '75%',
        margin: 0,
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
      }}
    >
      {message.content}
    </p>
  </div>
) : (
  <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}>
    <p
      style={{
        fontFamily: '"Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
        fontSize: '16px',
        color: '#1a1a1a',
        backgroundColor: '#DCF8C6',
        margin: 0
      }}
    >
      {message.content}
    </p>
  </div>
)}


       
       
  
       
       
       
       
      
      </div>
    </div>
  );
};

export default ChatBubble;
