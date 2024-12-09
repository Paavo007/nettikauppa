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
app.use(express.static(path.join(__dirname, 'public')));

// Set up the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'root', // Your MySQL password
  database: 'nettikauppa', // Replace with your database name
  port: 3306, // Ensure correct port
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
  const query = 'SELECT * FROM users'; // Query to fetch all users from the 'users' table
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching users.' });
    }
    res.json(results); // Send the list of users as a JSON response
  });
});

// API endpoint to fetch products, with optional search functionality
app.get('/api/products', (req, res) => {
  const searchTerm = req.query.search || ''; // Get the search term from the query string

  // Build the query to search for products by name (or other attributes if needed)
  const query = `
    SELECT * FROM products
    WHERE prod_name LIKE ?`; // Use LIKE to search for partial matches

  // Execute the query with the search term (using wildcard characters for partial matching)
  db.query(query, [`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.log('Error fetching products:', err); // Log the error message
      return res.status(500).json({ success: false, message: 'Error fetching products.' });
    }
    console.log('Products fetched:', results); // Log the results of the query
    res.json(results); // Send the results to the client
  });
});

app.post('/api/products', (req, res) => {
  const { prod_name, prod_description, prod_price, prod_quantity, prod_category, prod_company } = req.body;

  // Log the incoming data to check its validity
  console.log(req.body);  // Log the incoming request body

  // Validate the input fields
  if (!prod_name || !prod_description || !prod_price || !prod_quantity || !prod_category || !prod_company) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
  }

  // SQL query to insert the new product
  const insertQuery = `
    INSERT INTO products (prod_name, prod_description, prod_price, prod_quantity, prod_category, prod_company)
    VALUES (?, ?, ?, ?, ?, ?)`;

  // Execute the query to insert the product
  db.query(insertQuery, [prod_name, prod_description, prod_price, prod_quantity, prod_category, prod_company], (err, result) => {
    if (err) {
      console.error('Error adding product:', err); // Log detailed error
      return res.status(500).json({ success: false, message: 'Error adding product to the database.', error: err.message });
    }

    res.status(201).json({
      success: true,
      message: 'Product added successfully!',
      product: {
        prod_id: result.insertId, // Return the auto-generated product ID
        prod_name,
        prod_description,
        prod_price,
        prod_quantity,
        prod_category,
        prod_company,
      }
    });
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
    db.query(insertQuery, [username, email, password, address, postalcode, delivery_area], (err) => {
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
      // Check if the login credentials match the admin credentials
      if (email === 'admin@gmail.com' && password === 'admin') {
        return res.status(200).json({
          success: true,
          message: 'Admin login successful!',
          user: {
            id: 1,
            username: 'admin',
            email: 'admin@gmail.com',
          },
        });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid email or password.' });
      }
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
