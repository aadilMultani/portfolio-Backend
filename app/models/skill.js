const mongoose = require('mongoose');

let skillSchema = new mongoose.Schema({
    skillName: {
        type: String,
        requied: true
    },
    expertise: {
        type: Number,
        requied: true
    }
});

module.exports = mongoose.model('skill', skillSchema);