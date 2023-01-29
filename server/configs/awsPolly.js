const { PollyClient, StartSpeechSynthesisTaskCommand  } = require("@aws-sdk/client-polly");
const pollyConnectionObject = { region: "us-east-1", AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY}
const pollyClient = new PollyClient(pollyConnectionObject);
const pollyParams = {OutputFormat: "mp3", OutputS3BucketName: "loginregistrationapp", Text: "", TextType: "text", VoiceId: "Joanna", SampleRate: "22050"};

const useAWSPolly = async (openAIAnswer) => {
  try {
    pollyParams.Text = openAIAnswer;
    const awsPollyResponse = await pollyClient.send(new StartSpeechSynthesisTaskCommand(pollyParams));
    console.log(awsPollyResponse.SynthesisTask);
    console.log(awsPollyResponse.SynthesisTask.OutputUri);
    const awsPollyMP3 = awsPollyResponse.SynthesisTask.OutputUri
    console.log("Success, audio file added to " + pollyParams.OutputS3BucketName);
    return awsPollyMP3
  } 
  catch (err) {console.log("Error putting object", err)}
};

module.exports = useAWSPolly