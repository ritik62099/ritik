// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/messageApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Message Schema
const replySchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
  replies: [replySchema]
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).send(newMessage);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/api/messages/:id/replies', async (req, res) => {
  const { id } = req.params;
  const { name, message } = req.body;
  try {
    const msg = await Message.findById(id);
    if (!msg) return res.status(404).send('Message not found');
    msg.replies.push({ name, message });
    await msg.save();
    res.status(201).send(msg);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
