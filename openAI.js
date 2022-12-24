const { Configuration, OpenAIApi } = require("openai");

const configureOpenAICredentials = new Configuration({
    apiKey: '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',
  });
  
const openAI = new OpenAIApi(configureOpenAICredentials);

module.exports = {openAI}

