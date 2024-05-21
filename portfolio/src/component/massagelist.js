// src/MessagesList.jsx
import React, { useState } from 'react';
import axios from 'axios';


const MessagesList = ({ messages, fetchMessages }) => {
  const [expandedMessageIds, setExpandedMessageIds] = useState({});
  const [reply, setReply] = useState({});
  const [name, setName] = useState({});
  const [error, setError] = useState(null);

  const handleReplyChange = (e, messageId) => {
    setReply({ ...reply, [messageId]: e.target.value });
  };

  const handleNameChange = (e, messageId) => {
    setName({ ...name, [messageId]: e.target.value });
  };

  const handleReplySubmit = async (e, messageId) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/messages/${messageId}/replies`, {
        name: name[messageId],
        message: reply[messageId]
      });
      fetchMessages();
      setReply({ ...reply, [messageId]: '' });
      setName({ ...name, [messageId]: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to submit reply. Please try again later.');
    }
  };

  const toggleExpandMessage = (messageId) => {
    setExpandedMessageIds({
      ...expandedMessageIds,
      [messageId]: !expandedMessageIds[messageId],
    });
  };


  

  return (
    <div className="messages-list">
      <h2>Messages</h2>
      {messages.map((message) => (
        <div key={message._id} className="message-item">
          <h3 onClick={() => toggleExpandMessage(message._id)}>{message.name}</h3>
          {expandedMessageIds[message._id] && (
            <>
              {/* <p>{message.message}</p> */}
              <label>{message.message}</label>
              <small>{new Date(message.date).toLocaleString()}</small>

              <div className="replies">
                {message.replies && message.replies.map((reply, index) => (
                  <div key={index} className="reply-item">
                    <h4>{reply.name}</h4>
                    <p>{reply.message}</p>
                    <small>{new Date(reply.date).toLocaleString()}</small>
                  </div>
                ))}
                <form onSubmit={(e) => handleReplySubmit(e, message._id)} className="reply-form">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name[message._id] || ''} 
                    onChange={(e) => handleNameChange(e, message._id)} 
                    required 
                  />
                  <textarea 
                    placeholder="Your Reply" 
                    value={reply[message._id] || ''} 
                    onChange={(e) => handleReplyChange(e, message._id)} 
                    required 
                  />
                  <button type="submit">Reply</button>
                </form>
              </div>
              {error && <p className="error">{error}</p>}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
