const { Schema, model } = require("mongoose");
const Joi = require("joi");
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});
const User = model("User", userSchema);
// Sign up validation schema
const signUpSchema = Joi.object({
    fullName: Joi.string().min(3).max(25).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(32).required()
});
// Log in validation schema
const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(32).required(),
});
module.exports = { User, signUpSchema, logInSchema };
