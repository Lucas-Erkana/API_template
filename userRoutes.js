// userRoutes.js
const express = require('express');
const client = require('./connection.js'); // Adjust the path as necessary

const router = express.Router();

//view all users
router.get('/', (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log(err.message);
            res.status(500).send('Error retrieving users');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

//view single user by ID
router.get('/:id', (req, res) => {
    client.query(`Select * from users where id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log(err.message);
            res.status(500).send('Error retrieving user');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

// Route for creating a new user
router.post('/', (req, res) => {
    const user = req.body;
    let insertQuery = `insert into users(username, email, password) 
                       values('${user.username}', '${user.email}', '${user.password}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Error in user insertion');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

// Route for creating a new recipe
router.post('/', (req, res) => {
    const recipe = req.body;
    let insertQuery = `insert into recipes(user_id, title, ingredients, instructions, prep_time, cook_time, servings, tags, image) 
                       values (
                           ${recipe.user_id}, 
                           '${recipe.title}', 
                           '${recipe.ingredients}', 
                           '${recipe.instructions}', 
                           ${recipe.prep_time}, 
                           ${recipe.cook_time}, 
                           ${recipe.servings}, 
                           '${recipe.tags}', 
                           '${recipe.image}'
                       )`;

    console.log("Received recipe:", recipe);
    console.log("Executing query:", insertQuery);

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Recipe insertion was successful');
        } else {
            console.log("Error in recipe insertion:", err);
            res.status(500).send('Error in recipe insertion');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

// Update user by ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId)
    const updatedUserData = req.body;

    // Construct the update query
    let updateQuery = `UPDATE users
                      SET username = '${updatedUserData.username}',
                          email = '${updatedUserData.email}',
                          password = '${updatedUserData.password}'
                      WHERE id = ${userId}`;

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('User update was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Error in user update');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});



module.exports = router;
