const tryCatch = require('../middleware/tryCatch');
const skill = require('../models/skill');
const ErrorHandler = require('../utils/errorHandler');

exports.addSkill = tryCatch(
    async (req, res, next) => {

        const { skillName, expertise } = req.body;

        if (!skillName || !expertise) return next(new ErrorHandler("please enter valid field", 501));

        const Skill = await skill.create({ skillName, expertise });

        return res.status(200).json({
            Skill,
            message: 'skill add successfull'
        });
    }
);

exports.getSkill = tryCatch(
    async (req, res, next) => {
        const Skill = await skill.find({});

        if (!Skill) return next(new ErrorHandler("skill not found", 404));

        return res.status(200).json({
            Skill,
            messsage: 'skill fetch successfull'
        });
    }
);