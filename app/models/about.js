const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    aboutMe: {
        type: String,
        required: true,
        trim: true
    },
    detail: [
        {
            birthday: {
                type: String,
                required: true,
                trim: true
            },
            Age: {
                type: Number,
                required: true,
                trim: true
            },
            Website: {
                type: String,
                required: true,
                trim: true
            },
            Degree: {
                type: String,
                required: true,
                trim: true
            },
            Phone: {
                type: Number,
                required: true,
                trim: true
            },
            PhEmailone: {
                type: String,
                required: true,
                trim: true,
                unique: true
            },
            City: {
                type: String,
                required: true,
                trim: true
            },
            Freelance: {
                type: String,
                required: true,
                trim: true
            }
        }
    ],
    title: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("about", aboutSchema);