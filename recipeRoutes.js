const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // Import the Recipe model

// Route for getting all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Use the Recipe model to query all recipes
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route for getting a specific recipe by ID
router.get('/:id', async (req, res) => {
    const recipeId = req.params.id;
    try {
        const recipe = await Recipe.findById(recipeId); // Use the Recipe model to find a recipe by ID
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route for creating a new recipe
router.post('/', async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        prep_time: req.body.prep_time,
        cook_time: req.body.cook_time,
        servings: req.body.servings,
        tags: req.body.tags,
        image: req.body.image,
    });

    try {
        const newRecipe = await recipe.save(); // Save the new recipe using the Recipe model
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route for updating a recipe by ID
router.put('/:id', async (req, res) => {
    const recipeId = req.params.id;
    const updatedRecipeData = req.body;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            recipeId,
            updatedRecipeData,
            { new: true } // Return the updated recipe
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route for deleting a specific recipe by ID
router.delete('/:id', async (req, res) => {
    const recipeId = req.params.id;

    try {
        const deletedRecipe = await Recipe.findByIdAndRemove(recipeId);

        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
