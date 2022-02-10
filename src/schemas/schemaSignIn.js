import joi from "joi"

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().required()
});

export default signInSchema