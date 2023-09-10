const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const Joi = require("joi");

const resumeSchema = new Schema({
    RESUME: {
        type: mongoose.Schema.Types.Mixed,
    }

  });

  // Define the schema for the user collection
const CoverSchema = new Schema({
    COVERLETTER: {
        type: mongoose.Schema.Types.Mixed,
    }
  });

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
    },

    resumes: [resumeSchema],
    coverLetters: [CoverSchema],
});

const User = model("User", userSchema);
const CoverLetter = model("CoverLetter", resumeSchema);
const Resume = model("Resume", CoverSchema);

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

module.exports = { User, signUpSchema, logInSchema, CoverLetter, Resume };