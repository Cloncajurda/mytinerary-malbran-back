import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().min(3).max(21).messages({
        'string.min': "name must have at least 3 characters",
        'string.max': "name must be less than 21 characters",
        'any.required': "name is required",
        'string.empty': "name is required"
    }),

    mail: joi.string().min(8).max(30).messages({
        'string.min': "mail must have at least 8 alphanumeric characters",
        'string.max': "mail must be less than 30 alphanumeric characters",
        'any.required': "mail is required",
        'string.empty': "mail is required"
    }),

    password: joi.string().regex(
        /^[a-zA-Z0-9, ]*$/, 
        'Alphanumerics, space and comma characters')
    .min(3).max(30).required(),

    lastName: joi.string().min(3).max(21).messages({
        'string.min': "name must have at least 3 characters",
        'string.max': "name must be less than 21 characters",
        'any.required': "name is required",
        'string.empty': "name is required"
    }),
    
    country: joi.string().min(5).max(15).messages({
        'string.min': "country must have at least 5 characters",
        'string.max': "country must be less than 15 characters",
        'any.required': "country is required",
        'string.empty': "country is required"
    }),

})

export default registerSchema