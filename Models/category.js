const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    }
})

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
