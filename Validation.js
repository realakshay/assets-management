const Joi = require("@hapi/joi")

const insertValidation = data =>{
    
    const schema = {
        id: Joi.number().required(),
        deviceName: Joi.string().min(2).required(),
        deviceType: Joi.string().min(2).required(),
        company: Joi.string().min(2).required(),
        imei: Joi.number().required(),
        osVersion: Joi.string().min(1).required(),
        os: Joi.string().min(2).required(),
        ram: Joi.string().min(2).required(),
        rom: Joi.string().min(2).required(),
        isActivated: Joi.boolean().required(),
        isAvailable: Joi.boolean().required(),
        releaseDate: Joi.string().min(2).required()
    }
    return Joi.validate(data, schema)
}

module.exports.insertValidation = insertValidation;