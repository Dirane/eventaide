const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // replace with your MySQL password
  database: 'eventaid'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

app.post('/register', (req, res) => {
  const { name, email, role, phoneNumber, password } = req.body;

  // Check if name is more than 20 characters
  if (name.length > 20) {
    return res.status(400).send('Name should not be more than 20 characters');
  }

  // Check if name or email already exists in the database
  const checkNameEmailSql = 'SELECT * FROM users WHERE Name = ? OR Email = ?';
  db.query(checkNameEmailSql, [name, email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      if (result[0].Name === name) {
        return res.status(400).send('Name already exists');
      }
      if (result[0].Email === email) {
        return res.status(400).send('Email already exists');
      }
    }

    // Insert the new user into the database
    const insertSql = 'INSERT INTO users (Name, Email, Role, Phone_Number, Password) VALUES (?, ?, ?, ?, ?)';
    db.query(insertSql, [name, email, role, phoneNumber, password], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send('User registered');
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match
  const checkUserSql = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
  db.query(checkUserSql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      const user = result[0];
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(400).send('Invalid email or password');
    }
  });
});

// Event creation endpoint
// Event creation endpoint
app.post('/api/events', (req, res) => {
  const { title, date, description, start_time, location, category, status, payment, organizer_id } = req.body;
  const insertEventSql = `
    INSERT INTO events (title, Date, Description, Start_Time, location, Oraganizer_id, Category, Status, Created_at, paymnet)
    VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)
  `;
  db.query(insertEventSql, [title, date, description, start_time, location, organizer_id, category, status, payment], (err, result) => {
    if (err) {
      console.error('Error creating event:', err);
      return res.status(500).send('Failed to create event');
    }
    res.status(201).json({ message: 'Event created successfully', eventId: result.insertId });
  });
});

// Fetch all events endpoint
// Fetch all events endpoint
app.get('/api/events', (req, res) => {
  const fetchEventsSql = 'SELECT event_id, title, Date, Description, location FROM events';
  db.query(fetchEventsSql, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      return res.status(500).send('Failed to fetch events');
    }
    res.status(200).json(results);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
