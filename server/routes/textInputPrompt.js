const express = require("express");
const textInputPrompt = express.Router();
const runTextPromptService = require("../controllers/textPromptController");

console.log('in prompt route 2');
textInputPrompt.post('/', runTextPromptService);
console.log('in prompt route');

module.exports = textInputPrompt;
