const tryCatch = require('../middleware/tryCatch');
const about = require('../models/about');
const ErrorHandler = require('../utils/errorHandler');

exports.getAbout = tryCatch(
    async (req, res, next) => {
        const About = await about.find({});

        if (!About) return next(new ErrorHandler("about not fount", 404));

        return res.status(200).json({
            About,
            message: 'Fetch Success !',
        });
    }
)
