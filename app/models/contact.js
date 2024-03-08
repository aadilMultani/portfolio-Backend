const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('contact', contactSchema);