const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // replace with your MySQL password
  database: 'smart_farming', // replace with your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/farmers', (req, res) => {
  db.query('SELECT * FROM farmers', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post('/api/farmers', (req, res) => {
  console.log('POST /api/farmers');
  console.log(req.body);
  const { mobile, name, farmerId, surveyId } = req.body;
  db.query(
    'INSERT INTO farmers (mobile, name, farmerId, surveyId) VALUES (?, ?, ?, ?)',
    [mobile, name, farmerId, surveyId],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.status(201).send('Farmer added');
    }
  );
});

app.delete('/api/farmers/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM farmers WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Farmer deleted');
  });
});

// New endpoints
app.get('/api/dashboard', (req, res) => {
  const borewellCountQuery = 'SELECT COUNT(*) AS borewellCount FROM borewells';
  const waterUsageQuery = 'SELECT SUM(water_usage) AS waterUsage FROM water_usage';
  const farmerCountQuery = 'SELECT COUNT(*) AS farmerCount FROM farmers';

  db.query(`${borewellCountQuery}; ${waterUsageQuery}; ${farmerCountQuery}`, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({
      borewellCount: results[0][0].borewellCount,
      waterUsage: results[1][0].waterUsage,
      farmerCount: results[2][0].farmerCount,
    });
  });
});

app.post('/api/borewells', (req, res) => {
  const { borewellId, farmerId } = req.body;
  db.query(
    'INSERT INTO borewells (borewellId, farmerId) VALUES (?, ?)',
    [borewellId, farmerId],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send('Borewell added');
    }
  );
});

app.get('/api/borewells', (req, res) => {
  db.query('SELECT * FROM borewells', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
