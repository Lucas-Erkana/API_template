// recipeRoutes.js
const express = require('express');
const client = require('./connection.js'); // Ensure the path is correct

const router = express.Router();

// Route for getting all recipes
router.get('/', (req, res) => {
    client.query(`Select * from recipes`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log(err.message);
            res.status(500).send('Error retrieving recipes');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

// Route for getting a specific recipe by ID
router.get('/:id', (req, res) => {
    const recipeId = req.params.id;
    client.query(`Select * from recipes where id=${recipeId}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log(err.message);
            res.status(500).send('Error retrieving recipe');
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

// Update recipe by ID
router.put('/:id', (req, res) => {
    const recipeId = req.params.id;
    const updatedRecipeData = req.body;

    // Construct the update query
    let updateQuery = `UPDATE recipes
                      SET user_id = ${updatedRecipeData.user_id},
                          title = '${updatedRecipeData.title}',
                          ingredients = '${updatedRecipeData.ingredients}',
                          instructions = '${updatedRecipeData.instructions}',
                          prep_time = ${updatedRecipeData.prep_time},
                          cook_time = ${updatedRecipeData.cook_time},
                          servings = ${updatedRecipeData.servings},
                          tags = '${updatedRecipeData.tags}',
                          image = '${updatedRecipeData.image}'
                      WHERE id = ${recipeId}`;

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Recipe update was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Error in recipe update');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});

// Route for deleting a specific recipe by ID
router.delete('/:id', (req, res) => {
    const recipeId = req.params.id;
    client.query(`DELETE FROM recipes WHERE id=${recipeId}`, (err, result) => {
        if (!err) {
            if (result.rowCount == 0) {
                res.status(404).send('Recipe not found');
            } else {
                res.send('Recipe deleted successfully');
            }
        } else {
            console.log(err.message);
            res.status(500).send('Error deleting recipe');
        }
    });
    // Consider managing the client connection lifecycle appropriately
});


module.exports = router;
