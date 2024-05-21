
import './App.css';
import Navbar from './component/navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageForm from './component/massagefrom';
import MessagesList from './component/massagelist';
import Footer from './component/footer';
function App() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <div className="app">
      <h1>Message Page</h1>
      <MessageForm fetchMessages={fetchMessages} />
      <MessagesList messages={messages} />
      <Footer/>
    </div>
    </div>
  );
}

export default App;
