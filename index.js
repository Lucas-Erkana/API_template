require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users');

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
    res.send({username: 'User'});
})

app.get('/add-user', async (req,res) =>{
    try {

        await User.insertMany([
            {
                username: "lucas",
                email: "erkanalucas@gmail.com",
                password: "123456",
            },
            {
                username: "david",
                email: "daviderkana@gmail.com",
                password: "123456",
            }
        ])
        res.send('User added...')
    }catch (error) {
        console.log("err", + error);
    }
})

app.get('/users', async (req,res) =>{
    const user = await User.find();
    if (user) {
        res.json(user)
    } else {
        res.send("Something went wrong.")
    }

})

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    })
});