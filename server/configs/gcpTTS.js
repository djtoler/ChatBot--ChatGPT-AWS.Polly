const textToSpeech = require('@google-cloud/text-to-speech');
const {Storage} = require('@google-cloud/storage');


const useGCPTTS = async (openAIAnswer) => {
    const bucketName = 'djs-bucket';
    const destFileName = 'newAnswer';
    const filePath = 'C:/Users/dwayn/Desktop/newGC/newChatGPT/chatgpt/answer.mp3';
    const storage = new Storage();

    console.log('in gcp');
    // Import other required libraries
    const fs = require('fs');
    const util = require('util');
    const client = new textToSpeech.TextToSpeechClient();
    async function convert() {
        const text = openAIAnswer;
        const gcpRequest = {
            input: {text: text},
            voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
            audioConfig: {audioEncoding: 'MP3'},
        };
        const [response] = await client.synthesizeSpeech(gcpRequest);
        console.log(response);

        const writeFile = util.promisify(fs.writeFile);
        await writeFile('answer.mp3', response.audioContent, 'binary');
        console.log('Audio content written to file: answer.mp3');
        convert();
    }
    const uploadFile = async ()=> {
        const options = {destination: destFileName};
        console.log(`${filePath} uploaded to ${bucketName}`);
        return await storage.bucket(bucketName).upload(filePath, options);
    } 
    await convert().then(uploadFile())
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${destFileName}`;
    console.log(publicUrl);
    return {mp3: publicUrl}
    
}

module.exports = useGCPTTS
