import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().min(8).max(30).messages({
        'string.min': "mail must have at least 8 alphanumeric characters",
        'string.max': "mail must be less than 30 alphanumeric characters",
        'any.required': "mail is required",
        'string.empty': "mail is required"
    }),
    password: joi.string().min(7).max(15).messages({
        'string.min': "password must have at least 7 alphanumeric characters",
        'string.max': "password must be less than 15 alphanumeric characters",
        'any.required': "password is required",
        'string.empty': "password is required"
    }),
})

export default signinSchema