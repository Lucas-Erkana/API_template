const client = require('./connection.js')
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./userRoutes");
const recipeRoutes = require("./recipeRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
client.connect();

app.use('/users', userRoutes);

app.use('/recipes', recipeRoutes);
