const express = require("express");
const textInputPrompt = express.Router();

const runTextPromptService = require("../controllers/textPromptController");

textInputPrompt.post('/', runTextPromptService);
console.log('in prompt route');

module.exports = textInputPrompt;
