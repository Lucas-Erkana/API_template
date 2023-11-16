require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/books');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

app.get('/', (req,res)=>{
    res.send({title: 'Books'});
})



// connectDB().then(()=>{
//     app.listen.listen(PORT, ()=>{
//         console.log(`Listening on port ${PORT}`)
//     })
// });