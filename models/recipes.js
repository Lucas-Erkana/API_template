const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    ingredients: [String],
    instructions: String,
    prepTime: Number,
    cookTime: Number,
    servings: Number,
    cuisine: String,
    course: String,
    nutritionalInfo: {
        calories: Number,
        fat: Number,
        protein: Number
    },
    images: [String],
    author: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    ratings: [{
        rating: Number,
        review: String
    }]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
