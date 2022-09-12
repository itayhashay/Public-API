const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    birthday: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    }

})

const User = mongoose.model('user', userSchema);
module.exports = User;