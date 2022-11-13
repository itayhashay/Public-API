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
    upvotes: {
        type: Number,
        default: 0,
        require: true
    },
    url: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true
    },
    img: {
        type: String,
        default: "\\img\\GerbilCropped.png"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    uploadBy: {
        type: String,
        require: true
    }
})

const Api = mongoose.model('api', apiSchema);
module.exports = Api;
