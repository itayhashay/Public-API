const mongoose = require('mongoose');
const apiSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    url: {
        type: String,
        require: true,
        trim: true
    },
    categoryId: {
        type: String,
        require: true
    }
})

const Api = mongoose.model('api', apiSchema);
module.exports = Api;
