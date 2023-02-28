# Recording Our Users Question to MP3

## ***Importing Packages:***

In the [Recorder.js](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/client/src/Components/Recorder.js) file, we record audio questions from our users. 

![frontend-chat-record-reqs](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-chat-record-reqs.PNG)

**At line 1**, we require a npm package called **`mic-recorder-to-mp3`** to [record the speech from the users microphone](https://www.npmjs.com/package/mic-recorder-to-mp3) and at line 4, we require **`Chakra-UI`** for their [pre-built design components.](https://chakra-ui.com/)

## ***Set Variable for Using Assembly AI for Speech-To-Text Service:***

![frontend-assembly-obj](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-assembly-obj.PNG)

**At line 7**, we create an instance of the Axios library for making HTTP requests

We set our **`baseURL`** variable to "**[https://api.assemblyai.com/v2](https://api.assemblyai.com/v2)**". This allows all requests made using this instance of Axios will be sent to [**AssemblyAI**](https://www.assemblyai.com/docs/walkthroughs#submitting-files-for-transcription) for transcription

## ***Initialize Our React Functional Component:***

![frontend-variables](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-variables.PNG)

**At line 17**, we start our [Recorder functional component](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/client/src/Components/Recorder.js) which will take speech from the microphone and translate it to text.

**Lines 18-19**, we use **`useRef`** hooks to store references to our audio recorder and our HTML audio player. 

**Lines 20-33**, we use  **`useState`** hooks to keep track of various variables and their state throughout this component.

**Line 34** also defines a **`config`** object, which is used as a header for a HTTP request.

## ***Start Recording A Question:***

![frontend-start-recording](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-start-recording.PNG)

**At line 36**, we jump into the application logic by starting with a **`useEffect`** hook to create a new instance of our *“MicRecorder”* everytime our [Recorder functional component](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/client/src/Components/Recorder.js) mounts.

**At line 40**, we make a function called **`startRecording`** to start the recording process. 

It calls the **`start`** method of the **`MicRecorder`** instance stored in **`recorder.current`** and sets the state of **`isRecording`** to true if the recording starts successfully. Our **`isRecording`** state variable is used to keep track of whether a recording is currently in progress

## ***Stop Recording A Question:***

![frontend-stop-recording](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-stop-recording.PNG)

**At line 40**, we make a function called stop **`stopRecording`.** 

This function stops a recording, retrieves the question from the user as an MP3 file, creates a new file using the audio data, creates a URL to access the audio data, updates the relevant React state variables and handles any errors that might occur during the process by logging them to the console. 

**At line 48**, **`recorder.current.stop()`** stops recording using the **`stop`** method of the **`recorder`** object. The **`recorder`** object is a React state variable that holds our current recording instance.

**At line 49**, **`.getMp3()`**retrieves our users question as an MP3 file using the **`getMp3`** method of the **`recorder`** object. The result of the **`getMp3`** method is a Promise that resolves to an array containing a **`Buffer`** and a **`Blob`**.

**At line 50 and 51**, we use the **`Buffer`** and **`Blob`** obtained in the previous step to create a new **`File`** instance, with the file name "audio.mp3". The **`type`** and **`lastModified`** properties of the file are also set.

**Line 52**,  we create a URL by using the **`createObjectURL`** method of the **`URL` object** that can be used to access the audio version of our users question and store it in a variable called **`newBlobUrl`.**

**Line 53-55**, we update our relevant state variables.

- Our **`blobUrl`** state variable is set to be used as the audio source in our HTML audio player.
- Our **`isRecording`** state variable is set to **`false`** to enable or disable our “stop” & “start” recording buttons
- Our  **`audioFile`** state variable is set to the file that contains the audio question from our user from line 50.
