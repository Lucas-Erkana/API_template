// Import required modules
const express = require('express');
const router = express.Router(); // Create a router object
const User = require('../models/users'); // Import the User model

// Route to get the root URL
router.get('/', (req, res) => {
    res.send({username: 'User'});
});

// Route to add users
router.get('/add-user', async (req, res) => {
    try {
        await User.insertMany([
            {
                username: "peter",
                email: "peter@gmail.com",
                password: "123456",
            },
            {
                username: "max",
                email: "max@gmail.com",
                password: "123456",
            }
        ]);
        res.send('User added...');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error adding user");
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
