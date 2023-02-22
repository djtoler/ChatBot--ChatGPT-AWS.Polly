# Sending Our Users Text Question to OpenAI and Getting a Text Answer Back

## ***Server Receives Text Question:***

![backend-index](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-index.PNG)

In our  `express-index.js` file at line 18, our server is set up to receive questions at our `/user-input` route. 

![backend-routes](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-routes.PNG)

In our `textInputPropt.js` file , our users question lands on our `textInputPrompt` route in the form of a post request and runs our `runTextPromptService` function. 

![backend-controller](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-controller.PNG)

The controller for our `textInputPrompt` is located in our `textPromptController.js` file. 

**At line 1**, we require our `questionAndAnswer.js` file to get access to the functionality that converts our text to speech.

**At line 3**, we initialize a function called `runQuestionAndAnswerService`. 

**At line 4-5**, we bring in our request body through a [destructured `prompt` variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). The request body will contain the text version of a users question. We also initialize a variable called `returnAnswer`  at line 5 that stores the return value of the `questionAndAnswerService` function (describe in the section below). We pass it our `prompt` variable and then return it as a JSON response **at line 6**.

## ***Send Question & Receive Text Response From OpenAI API:***

Our `questionAndAnswerService` function we mentioned above, is defined in our `questionAndAnswer.js` file.  In this file, we handle all of our business logic. 

![backend-main-file](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-main-file.PNG)

 

**At line 5**, we make a function called `runTextPrompt` and pass it a `prompt` parameter. This `prompt` parameter will be our users question that's sent from our client side. 

**At line 8**, we initialize a variable `openAIClient`. 

**At line 11**, we initialize a variable `openAIAnswer`. This variable will store the answer that openAI responds to our question with. 

![backend-main-file-1](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-main-file-1.PNG)

**At line 14**, we store a variable called questionText that holds the value of our prompt value to pass as a parameter later on. We could just pass the prompt as a parameter but we make it a bit more readable/understandable, by being more explicit with the naming convention. 

**At line 15**, we store a variable called `answerText`. We get the value of answer text by traversing through the properties of the `openAIAnswer` object variable.

![backend-main-file-2](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-main-file-2.PNG)

**At line 21**, we initialize a variable named `returnMP3`.  This variable holds the return value of running the `runTextToSpeechJob` function that we require in line 2 at the top of our file. We pass it our `answerText` variable and the *text-to-speech service* that we plan on using for it, which at the moment, is [AWS Polly’s TTS service](https://aws.amazon.com/polly/).

**At line 24,** we run our `runSaveToDatabaseJob` function that we required in line 3. We pass it our `answerText` variable that holds the text answer from openAI, the `questionText` that holds the text question from our user and  `saveToMongoDB,` the database we will use to store our question and answer in.

![backend-main-file-3](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-main-file-3.PNG)

**At line 27**, we finally return an object that contains the text answer and the audio answer of our users question.

![backend-main-file-4](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-main-file-4.PNG)