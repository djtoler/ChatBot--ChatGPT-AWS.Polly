const { openAI, openAIResponse } = require("../configs/openAI");
const { runTextToSpeechJob, useAWSPolly, useGCPTTS } = require("./textToSpeech");
const { runSaveToDatabaseJob, saveToMongoDB } = require("./saveToDatabase");

const runTextPrompt = async (prompt) => {
  console.log('in run text prompt');
  
  // Initialize OpenAI client
  const openAIClient = await openAI;

  // Initialize OpenAI response object and pass it a prompt param (prompt param is users input)
  const openAIAnswer = await openAIResponse(prompt);

  // Initialize variables to store the question from the client and response from the server
  const questionText = prompt;
  const answerText = openAIAnswer.data.choices[0].text;

  console.log(questionText);
  console.log(answerText);

  // Initialize variable to store the mp3 returned from the TTS function (runTextToSpeechJob). Pass it the answer and the TTS platfrom you want to use
  const returnMP3 = await runTextToSpeechJob(answerText, useAWSPolly);

  // Run the save to databse function, pass it the question, the answer & what database you want to use
  runSaveToDatabaseJob(questionText, answerText, saveToMongoDB);
  

  return { answer: answerText, mp3Answer: returnMP3 };
};

module.exports = runTextPrompt;
