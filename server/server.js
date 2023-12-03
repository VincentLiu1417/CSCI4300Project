// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://vincentliu1417:NelsonUGA1921@cluster0.5pvibwq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/users', users);

// Create a mongoose model (example)
const Item = mongoose.model('Item', {
  name: String,
  price: String,
  img: String,
});

// Define your API endpoint to retrieve an item by ID
app.get('/items/:itemId', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/items', async (req, res) => {
    try {
      const items = await Item.find().limit(4);
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/items', async (req, res) => {
    const { name, price, img } = req.body;
  
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
  
    try {
      const newItem = new Item({ name, price, img });
      await newItem.save();
      res.json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
