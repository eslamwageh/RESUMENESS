const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const Joi = require("joi");

const resumeSchema = new Schema({
    name: String,
    address: String,
    number: String,
    email: String,
    LI: String,
    links: String,
    summary: String,
    title: String,
    title0: String,
    title1: String,
    title2: String,
    title3: String,
    compname0: String,
    compname1: String,
    compname2: String,
    compname3: String,
    comploc0: String,
    comploc1: String,
    comploc2: String,
    comploc3: String,
    date0: String,
    date1: String,
    date2: String,
    date3: String,
    desc0: String,
    desc1: String,
    desc2: String,
    desc3: String,
    degrees: String,
    field: String,
    instname0: String,
    instname1: String,
    instdate0: String,
    instdate1: String,
    instloc0: String,
    instloc1: String,
    skill0: String,
    skill1: String,
    skill2: String,
    skill3: String,
    skillprc0: String,
    skillprc1: String,
    skillprc2: String,
    skillprc3: String,
    crt0: String,
    crt1: String,
    lang0: String,
    lang1: String,
    lang2: String,
    langprc0: String,
    langprc1: String,
    langprc2: String,
    hobb0: String,
    hobb1: String,
    hobb2: String,

  });

  // Define the schema for the user collection
const CoverSchema = new Schema({
    name: String,
    address: String,
    number: String,
    email: String,
    LI: String,
    title: String,
    date: String,
    recname: String,
    rectitle: String,
    compname: String,
    comploc: String,
    para: String,
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
const CoverLetter = model("CoverLetter", CoverSchema);
const Resume = model("Resume", resumeSchema);

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