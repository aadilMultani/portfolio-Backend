const tryCatch = require('../middleware/tryCatch');
const ErrorHandler = require('../utils/errorHandler');
const contact = require('../models/contact');

exports.addContact = tryCatch(
    async (req, res, next) => {

        const { name, email, subject, message } = req.body;

        if (!name || !email) return next(new ErrorHandler("please enter required field", 501));

        const Contact = await contact.create({ name, email, subject, message });

        return res.status(200).json({
            Contact,
            message: 'Contact add successfull',
            success: true
        });
    }
)