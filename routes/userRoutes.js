// Import required modules
const express = require('express');
const router = express.Router(); // Create a router object
const User = require('../models/users'); // Import the User model

// Middleware to parse JSON data
router.use(express.json());

// Route to get the root URL
router.get('/', (req, res) => {
    res.send({user: 'Welcome to the Recipe API by Lucas Erkana'});
});

// Route to add a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body); // Create a new user with the request body data
        await newUser.save(); // Save the new user
        res.status(201).send('User added successfully');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error adding user: " + error.message);
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

// Route to update a user
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, // Get the _id from URL parameter
            req.body, // Update user with data from request body
            { new: true } // Return the updated object
        );
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error updating user: " + error.message);
    }
});

// Route to delete a user by _id
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (deletedUser) {
            res.send(`User with id ${req.params.id} was deleted successfully`);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error deleting user: " + error.message);
    }
});

// Export the router
module.exports = router;
