const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unit: String, // You can include the unit of measurement here (e.g., grams, cups)
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  prepTime: Number,
  cookTime: Number,
  servings: Number,
  tags: [String], // You can store multiple tags as an array of strings
  image: String, // URL or file path to the recipe image
});

module.exports = mongoose.model('Recipe', recipeSchema);
