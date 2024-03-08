const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// importing All Route 
const routes = require('./routes/routes');
const errorMiddleware = require('./middleware/error');

mongoose.connect(MONGO_URI).then(() => {
    console.log("database Connected!");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "node work properly!"
    });
});

app.use('/api/v1', routes);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`server listen on port ${port}`);
}) 