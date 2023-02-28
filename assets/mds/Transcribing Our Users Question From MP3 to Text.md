# Transcribing Our Users Question From MP3 to Text

## ***Upload Audio to Transcribe Speech to Text:***

![frontend-](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-.PNG)

**At lines 63-70**, we use the **`useEffect`** hook and pass it our **`audioFile`** state variable so that anytime our **`audioFile`** changes, we run the logic inside of our **`useEffect`** hook.

**At line 64**, we check if the **`audioFile`** (audio) state variable is truthy (basically not “*null*” or “*undefined*”). 

**At** **line 65 & 66,** if our **`audioFile`**  is truthy, we make a POST request to the URL **`/upload`** using the **`post`** method of the **`assembly`** object we made earlier from lines 7-14. Our **`audioFile`** is passed as the second argument to the **`post`** method.

**At line 67**, the function inside our **`.then()`** call sets our **`uploadURL`** state variable with the URL we get from the API response. The URL is obtained by accessing the **`upload_url`** property of our ***res.data*** object.

![frontend-upload-audio](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-upload-audio.PNG)

**At line 73**, we make a function called **`submitTranscriptionHandler`**. This function is fired when a user clicks the submit button.

**At line 74 & 75** we make a POST request to the URL **`/transcript`** using the **`post`** method of our **`assembly`** object. The **`audio_url`** key with the value **`uploadURL`** is passed as the second argument to the **`post`** method.
**At line 76,** we handle our resolved Promise from our API request. The function inside the **`.then()`** call sets our**`transcriptID`** state variable with the **`id`** we get from the API response. 

**At line 77,** we call our `**checkStatusHandler`** function which checks the status of the transcription process.

![frontend-get-transcript](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-get-transcript.PNG)

**At line 84,** we make an asynchronous function called **`checkStatusHandler`.** This function checks the status of our speech-to-text conversion process. We make it asynchronous so that it runs whenever its called, without waiting 

**At line 85-86**, we set our **`isLoading`** state variable to true move into a try block 

**At line 87-91**, we use a **`get`** method on our **`assembly`** object and build the url using **`transcriptID`** that we set in line 76 of our **`submitTranscriptionHandler`** function. If our request is successful, the function sets the **`setTranscriptData`**  state variable to the **`res.data`** object we get from out API response. Finally we log whatever error wet get if our try block functionality isn't successful.

## ***Convert Text From Audio Back to Speech After Server Response***:

![frontend-tts-to-backend](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-tts-to-backend.PNG)

**At line 108**, we make a function called **`textToSpeech.`** This function will convert the text from our audio question transcription to an audio answer.

**At line 109**, we initialize a variable called prompt and set it to the current value of our transcript state variable.

**At line 110**, we use the Axios library to send an HTTP POST request to our server located at "**[http://localhost:9000/user-input](http://localhost:9000/user-input)**" and destructure our response **`data`**object

**At line 111,** the **`setResponsAudio`** state variable id set to **`data.mp3Answer`**, which is used as [the `src` for our HTML audio player](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/a88e960995476f37eac19ca0d569d26598bcc56f/client/src/Components/Recorder.js#L105) that plays back an answer to our users question