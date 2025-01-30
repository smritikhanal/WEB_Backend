const { Sequelize } = require('sequelize'); // Import Sequelize

// Create Sequelize instance with hardcoded database credentials
const sequelize = new Sequelize('merothau', 'postgres', 'admin123', {
    host: 'localhost',    // Database host
    dialect: 'postgres',  // Correct dialect for PostgreSQL
    port: 5432,           // PostgreSQL default port
    logging: false,       // Disable logging
    define: {
        timestamps: false, // Disable automatic timestamps
    },
});

// Test conne

// Export the Sequelize instance
module.exports = sequelize;
