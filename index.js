// Import required modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const recipeRoutes = require('./routes/recipeRoutes'); // Import recipe routes
const cors = require('cors');

//include the Access-Control-Allow-Origin header in its responses.
// const allowedOrigins = ['http://127.0.0.1:5500', 'https://code-alpha-recipe-book.vercel.app/'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// Connect to MongoDB
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

// Use routes for handling paths
app.use('/', userRoutes);
app.use('/', recipeRoutes); // Use recipeRoutes

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});
