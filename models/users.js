const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const saltRounds = 10;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
   email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Pre-save hook to hash password
// UserSchema.pre('save', async function(next) {
//     // Check if the password field is modified
//     if (this.isModified('password')) {
//         // Hash the password and replace it
//         this.password = await bcrypt.hash(this.password, saltRounds);
//         this.username = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

module.exports = mongoose.model('User', UserSchema);