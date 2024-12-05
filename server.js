const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files (like images, CSS, JavaScript) from the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Your MySQL username
  password: 'root',  // Your MySQL password
  database: 'nettikauppa',  // Replace with your database name
  port: 3306,  // Ensure correct port
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Serve the index.html on the root route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to fetch all users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';  // Query to fetch all users from the 'users' table
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching users.' });
    }
    res.json(results);  // Send the list of users as a JSON response
  });
});

// API endpoint to handle user sign-up (POST)
app.post('/api/signup', (req, res) => {
  const { username, email, password, address, postalcode, delivery_area } = req.body;

  // Basic validation
  if (!username || !email || !password || !address || !postalcode || !delivery_area) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
  }

  // Check if user already exists by email
  const checkQuery = 'SELECT * FROM users WHERE user_email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error checking for existing user.' });
    }
    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already in use.' });
    }

    // Insert the new user into the database (password is stored as plain text here)
    const insertQuery = 'INSERT INTO users (user_name, user_email, user_password, user_address, user_postalcode, user_delivery_area, user_created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    db.query(insertQuery, [username, email, password, address, postalcode, delivery_area], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error registering user.' });
      }
      return res.status(201).json({ success: true, message: 'User registered successfully!' });
    });
  });
});

// API endpoint to handle user login (POST)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password.' });
  }

  // Query to check the provided email and password in the database
  const query = 'SELECT * FROM users WHERE user_email = ? AND user_password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error logging in.' });
    }

    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }

    // Respond with success and user data (excluding sensitive data like password)
    const user = results[0];
    res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: {
        id: user.id,
        username: user.user_name,
        email: user.user_email,
      },
    });
  });
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
