const express = require('express');
const router = express.Router(); // Create a router object
const Recipe = require('../models/recipes'); // Import the Recipe model

// Middleware to parse JSON data
router.use(express.json());

// Create a new recipe
router.post('/recipes', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).send('Recipe added successfully');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error adding recipe: " + error.message);
    }
});

// Get all recipes
router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error retrieving recipes");
    }
});

// Get a single recipe by ID
router.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe) {
            res.json(recipe);
        } else {
            res.status(404).send('Recipe not found');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error retrieving recipe");
    }
});

// Update a recipe
router.put('/recipes/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (updatedRecipe) {
            res.json(updatedRecipe);
        } else {
            res.status(404).send('Recipe not found');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error updating recipe: " + error.message);
    }
});

// Delete a recipe
router.delete('/recipes/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (deletedRecipe) {
            res.send(`Recipe with id ${req.params.id} was deleted successfully`);
        } else {
            res.status(404).send('Recipe not found');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error deleting recipe: " + error.message);
    }
});

// Export the router
module.exports = router;
