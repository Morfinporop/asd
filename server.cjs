const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const MONGO = process.env.MONGO_URL || process.env.MONGODB_URI || process.env.MONGO_PUBLIC_URL || 'mongodb://mongo:CQKcBWImtaEZnBGOdczXZyqiROtftIib@mongodb.railway.internal:27017';
const PORT = process.env.PORT || 3000;

// DB
const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, default: 'Unknown' },
  url: { type: String, required: true },
  addedBy: { type: String, default: 'web' },
  addedAt: { type: Date, default: Date.now }
});
const Track = mongoose.model('Track', trackSchema);

mongoose.connect(MONGO, { dbName: 'soundforge' })
  .then(() => console.log('DB connected'))
  .catch(e => console.error('DB error:', e.message));

const app = express();
app.use(cors());
app.use(express.json());

// API
app.get('/api/tracks', async (req, res) => {
  const tracks = await Track.find().sort({ addedAt: -1 }).limit(100);
  res.json(tracks);
});

app.post('/api/tracks', async (req, res) => {
  try {
    const { title, artist, url, addedBy } = req.body;
    if (!title || !url) return res.status(400).json({ error: 'title and url required' });
    const track = await Track.create({ title, artist, url, addedBy });
    res.json(track);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/status', (req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
});

// Serve frontend
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
