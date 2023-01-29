const useAWSPolly = require("../configs/awsPolly");

const runTextToSpeechJob = async (responseAnswerText, textToSpeechService) => {
  const responseAnswerMP3 = await textToSpeechService(responseAnswerText);
  return responseAnswerMP3;
};

module.exports = { runTextToSpeechJob, useAWSPolly };
