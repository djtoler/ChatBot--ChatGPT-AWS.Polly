const { openAI, openAIResponse } = require("../configs/openAI");
const { runTextToSpeechJob, useAWSPolly } = require("./textToSpeech");
const { runSaveToDatabaseJob, saveToMongoDB } = require("./saveToDatabase");

const runTextPrompt = async (prompt) => {
  // Initialize OpenAI client
  const openAIClient = await openAI;

  // Initialize OpenAI response object and pass it a prompt param (prompt param is users input)
  const openAIAnswer = await openAIResponse(prompt);

  // Initialize variables to store the question from the client and response from the server
  const questionText = prompt;
  const answerText = openAIAnswer.data.choices[0].text;

  // Initialize variable to store the mp3 returned from the TTS function (runTextToSpeechJob). Pass it the answer and the TTS platfrom you want to use
  const returnMP3 = await runTextToSpeechJob(answerText, useAWSPolly);

  // Run the save to databse function, pass it the question, the answer & what database you want to use
  runSaveToDatabaseJob(questionText, answerText, saveToMongoDB);
  console.log("returnMP3----->", returnMP3);

  return { answer: openAIAnswer.data.choices[0].text, mp3Answer: returnMP3 };
};

module.exports = runTextPrompt;
