// src/MessageForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ fetchMessages }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/messages', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      fetchMessages();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <h2>Send Us a Message</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MessageForm;
