const express = require('express');
const router = express.Router();
const User = require('./models/users'); // Import the User model
// const client = require('./connection.js'); // Adjust the path as necessary



// View all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving users');
  }
});

// View single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving user');
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in user insertion');
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in user update');
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in user deletion');
  }
});

module.exports = router;
