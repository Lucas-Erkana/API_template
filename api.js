const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./userRoutes");
const recipeRoutes = require("./recipeRoutes");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the MONGO_URL from environment variables for MongoDB connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/recipes';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3300;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);
