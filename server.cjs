const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const DATABASE_URL = process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL;
const PORT = process.env.PORT || 3000;

// PostgreSQL
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL && DATABASE_URL.includes('railway') ? { rejectUnauthorized: false } : false
});

// Create table
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tracks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        artist VARCHAR(500) DEFAULT 'Unknown',
        url TEXT NOT NULL,
        added_by VARCHAR(200) DEFAULT 'web',
        added_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('DB: table ready');
  } catch (e) {
    console.error('DB:', e.message);
  }
})();

const app = express();
app.use(express.json());

// API
app.get('/api/tracks', async (req, res) => {
  try {
    const r = await pool.query('SELECT * FROM tracks ORDER BY added_at DESC LIMIT 200');
    res.json(r.rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/tracks', async (req, res) => {
  try {
    const { title, artist, url, added_by } = req.body;
    if (!title || !url) return res.status(400).json({ error: 'title and url required' });
    const r = await pool.query(
      'INSERT INTO tracks (title, artist, url, added_by) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, artist || 'Unknown', url, added_by || 'web']
    );
    res.json(r.rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/tracks/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM tracks WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/status', async (req, res) => {
  try {
    const r = await pool.query('SELECT COUNT(*) as count FROM tracks');
    res.json({ ok: true, tracks: parseInt(r.rows[0].count) });
  } catch { res.json({ ok: false, tracks: 0 }); }
});

// Serve frontend
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback — Express v5 compatible
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => console.log('Server: port ' + PORT));
