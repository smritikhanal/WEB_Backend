const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


// Define routes
router.get('/', userController.getAllUsers); // Get all users
router.get('/:id', userController.getUserById); // Get user by ID
router.post('/', userController.createUser); // Create a new user
router.put('/:id', userController.updateUser); // Update a user by ID
router.delete('/:id', userController.deleteUser); // Delete a user by ID

router.post('/login', userController.loginUser);

module.exports = router;