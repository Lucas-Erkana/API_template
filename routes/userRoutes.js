// Import required modules
const express = require('express');
const router = express.Router(); // Create a router object
const User = require('../models/users'); // Import the User model

// Middleware to parse JSON data
router.use(express.json());

// Route to get the root URL
router.get('/', (req, res) => {
    res.send({username: 'User'});
});

// Route to add a new user (updated to handle POST request)
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body); // Create a new user with the request body data
        await newUser.save(); // Save the new user
        res.status(201).send('User added successfully');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error adding user" + error.message);
    }
});

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error retrieving users");
    }
});

// Export the router
module.exports = router;
