const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Optional (useful for legacy projects)

const sequelize = require('./database/db'); // Import Sequelize instance
const UserRoutes = require('./routes/UserRoutes'); // Import user routes
const authRoutes = require('./routes/auth'); // Path to your auth route

const app = express();
const PORT = 3000;

// Middleware 

// app.use('/api/auth', authRoutes);


app.use(express.json()); // Built-in body parser for JSON
app.use(bodyParser.urlencoded({ extended: true })); // Optional: for parsing form-urlencoded data


// API Routes
app.use('/api/users', UserRoutes);

// Test DB Connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the PostgreSQL database!');
        await sequelize.sync(); // Sync models to database
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})();

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});