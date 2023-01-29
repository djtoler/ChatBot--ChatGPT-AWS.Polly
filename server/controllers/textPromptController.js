const questionAndAnswerService = require("../functions/questionAndAnswer.js");

const runQuestionAndAnswerService = async (req, res) => {
  const { prompt } = req.body;
  const returnAnswer = await questionAndAnswerService(prompt);
  return res.json(returnAnswer);
};

module.exports = runQuestionAndAnswerService;
