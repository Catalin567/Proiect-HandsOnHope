const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5010;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Serverul este activ și rulează!');
});

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '.',
  port: 5432,
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM table');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
