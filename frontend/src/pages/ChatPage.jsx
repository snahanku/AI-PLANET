import React, { useState, useEffect, useRef } from 'react';
import UploadModal from '../components/UploadModal';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

const ChatPage = () => {
  const [documentId, setDocumentId] = useState(null);
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);

  // Handle sending a question to the backend
  const handleSend = async (question) => {
    if (!documentId) {
      alert('Please upload a PDF first!');
      return;
    }

    const userMessage = { role: 'user', content: question };
    setChat((prevChat) => [...prevChat, userMessage]);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ document_id: documentId, question }),
      });

      if (!response.ok) {
        throw new Error("Failed to get the answer");
      }

      const data = await response.json();
      const botMessage = { role: 'bot', content: data.answer };

      setChat((prevChat) => [...prevChat, botMessage]);
    } catch (err) {
      const errorMessage = { role: 'bot', content: 'Error: ' + err.message };
      setChat((prevChat) => [...prevChat, errorMessage]);
    }
  };

  // Handle file upload and call the backend to save the file
 
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const res = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) throw new Error("Upload failed");
  
      const data = await res.json();
      console.log("Uploaded:", data);
  
      // ✅ Set documentId so questions can be asked
      setDocumentId(data.id); // or data.document_id if you renamed it in backend
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
    }}>
      {/* UploadModal component to handle file upload */}
      <UploadModal onUpload={handleUpload} />

      <div
        ref={chatContainerRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          backgroundColor: '#fafafa',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {chat.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>

      {/* ChatInput component to handle sending questions */}
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;
