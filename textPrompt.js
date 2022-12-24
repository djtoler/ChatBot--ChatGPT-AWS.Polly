const { openAI } = require("./openAI");

const runTextPrompt = async (prompt) => {
  const openAIClient = await openAI;
  const response = await openAI.createCompletion({
    model: "text-davinci-003",
    prompt: `\nQ: ${prompt}\nA:`,
    temperature: 0,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  console.log(response.data);
  console.log(response.data.choices[0].text);

  return {
    answer: response.data.choices[0].text,
  };
};

runTextPrompt();

module.exports = { runTextPrompt };
