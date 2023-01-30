const { Configuration, OpenAIApi } = require("openai");

const configureOpenAICredentials = new Configuration({
    apiKey: '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',
  });
  
const openAI = new OpenAIApi(configureOpenAICredentials);

const openAIResponse = async (prompt)=> await openAI.createCompletion({
  model: "text-davinci-003",
  prompt: `\nQ: ${prompt}\nA:`,
  temperature: 0,
  max_tokens: 1500,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});

module.exports = {openAI, openAIResponse}

