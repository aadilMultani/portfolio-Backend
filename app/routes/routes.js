const express = require('express');
const { getAbout } = require('../controllers/about');
const { addSkill, getSkill } = require('../controllers/skill');
const { addContact } = require('../controllers/contact');

const app = express.Router();

app.get('/about', getAbout);

app.post('/add-skill', addSkill);

app.get('/get-skill', getSkill);

app.post('/add-contact', addContact);

module.exports = app;