# Converting Our Text Answer To MP3 and Returning It Back To Our User

## ***Convert Text To Speech:***

![backend-tts-job](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-job.PNG)

Our  `textToSpeech.js` file is where we store our function that we called in our `questionAndAnswer.js` file. This function converts text into speech and takes 2 parameters…

1. `responseAnswerText`: *This parameter’s value comes from our [response that we get when submitting our users question to OpenAI](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/a88e960995476f37eac19ca0d569d26598bcc56f/server/functions/questionAndAnswer.js#L15)*
2. `textToSpeechService`: *This parameter’s value comes from the text-to-speech service that we decide to use. Currently, we’re working with [Amazon Web Services’ text-to-speech API](https://aws.amazon.com/polly/) but we also have a [Google Cloud Platform text-to-speech API](https://cloud.google.com/text-to-speech) implementation (in* our file called [`gcpTTS.js`](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/server/configs/gcpTTS.js)*) for backup and extensibility / flexibility.* 

![backend-tts-polly3](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly3.PNG)

From the image above, we’ll go over the AWS implementation of our text-to-speech functionality in our file called [`awsPolly.js`](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/server/configs/awsPolly.js).

![backend-tts-polly4](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly4.PNG)

**In line 1**, we require the [`AWS Polly Client`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-polly/index.html) and the [`StartSpeechSynthesisTaskCommand`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-polly/classes/startspeechsynthesistaskcommand.html) from the AWS sdk.

**In line 2-4**, we build our connection object to that enables us to connect to AWS services. Our connection object properties hold values for the AWS region we’re using and our access credentials.  

Next, we initialize a new [`AWS Polly Client`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-polly/index.html) by passing it our `pollyConnectionObject` and storing it in a variable called `pollyClient`. 

Finally, we build our `pollyParams` object that we’ll send as a parameter when running AWS’s [`StartSpeechSynthesisTaskCommand`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-polly/classes/startspeechsynthesistaskcommand.html). 

We configure our object to return us an mp3 file and store it in an AWS bucket named `ttsapp`. 

The mp3 audio will be returned in the ***[“Joanna” voice](https://d2908q01vomqb2.cloudfront.net/artifacts/07c4b951-46c8-461f-bc9c-df9a6cf27fea/machine-learning/ml4787-Joanna-Standard.wav?_=1)*** and we temporarily use an empty string for our “text” property that will be populated with the parameter from our function at line 6.

![backend-tts-polly5](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly5.PNG)

**At line 6**, we make a function called `useAWSPolly` that takes a parameter named `openAIAnswer` (the text answer to our users question from OpenAI API response)

**At line 8**, we set the value of the text property of our `pollyParams` object to our `openAIAnswer` parameter. 

![backend-tts-polly2](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly2.PNG)

**At line 9**, we set a variable called `awsPollyResponse`. We pass our `pollyParams` to AWS’s [`StartSpeechSynthesisTaskCommand`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-polly/classes/startspeechsynthesistaskcommand.html) function. We pass that to the send method of our `pollyClient` instance.

![backend-tts-polly1](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly1.PNG)

**At line 10-16**, we set a variable called `awsPollyMP3`. Our `awsPollyResponse` variable will return us a response object that looks like the image to the fight…

The `SynthesisTask` object has a property called `OutputUri`.

The [value of `OutputUri`](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesisTask.html#polly-Type-SynthesisTask-OutputUri)  will be the pathway for the audio version of the answer to our users question

We return the `awsPollyMP3` variable and finally export our `useAWSPolly` function

![backend-tts-polly7](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-tts-polly7.PNG)