import MicRecorder from "mic-recorder-to-mp3"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { Button } from "@chakra-ui/button";


const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
      authorization: "3d29a15fd2b44b3c918463dafd64bbee",
      "content-type": "application/json",
      "transfer-encoding": "chunked",
    },
})


const Recorder = () => {    
    const recorder = useRef(null) //Recorder
    const audioPlayer = useRef(null) //Ref for the HTML Audio Tag
    const [blobURL, setBlobUrl] = useState(null)
    const [audioFile, setAudioFile] = useState(null)
    const [isRecording, setIsRecording] = useState(null)
    const [loading, setLoading] = useState();
    const [prompt, setPrompt] = useState("");
    const [textQuestion, setTextQuestion] = useState();
    const [responseData, setResponseData] = useState();
    const [responseAudio, setResponseAudio] = useState("");
    const [audioReady, setAudioReady] = useState(false);
    const [uploadURL, setUploadURL] = useState("");
    const [transcriptID, setTranscriptID] = useState("");
    const [transcriptData, setTranscriptData] = useState("");
    const [transcript, setTranscript] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const config = { headers: { "Content-type": "application/json" }};

    useEffect(() => {
      recorder.current = new MicRecorder({ bitRate: 128 })
    }, [])

    const startRecording = () => {
      recorder.current.start().then(() => {
        setIsRecording(true)
      })
    }

    const stopRecording = () => {
      recorder.current
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
            const file = new File(buffer, "audio.mp3", {type: blob.type, lastModified: Date.now(),})
            const newBlobUrl = URL.createObjectURL(blob)
            setBlobUrl(newBlobUrl)
            setIsRecording(false)
            setAudioFile(file)
        })
        .catch((e) => console.log(e))
    }



  // Upload the Audio File and get the Upload URL
  useEffect(() => {
    if (audioFile) {
      assembly
        .post("/upload", audioFile)
        .then((res) => setUploadURL(res.data.upload_url))
        .catch((err) => console.error(err))
    }
  }, [audioFile])

  // Submit the Upload URL to AssemblyAI and retrieve the Transcript ID
  const submitTranscriptionHandler = () => {
    assembly
      .post("/transcript", {audio_url: uploadURL,})
      .then((res) => {
        setTranscriptID(res.data.id)
        checkStatusHandler()
        })
      .catch((err) => console.error(err))
  }

  // Check the status of the Transcript
  const checkStatusHandler = async () => {
    setIsLoading(true)
    try {
      await assembly.get(`/transcript/${transcriptID}`).then((res) => {
        setTranscriptData(res.data)
      })
    } catch (err) {
      console.error(err)
    }
  }

  // Periodically check the status of the Transcript
  useEffect(() => {
    const interval = setInterval(() => {
      if (transcriptData.status !== "completed" && isLoading) {checkStatusHandler()} 
      else {
        setIsLoading(false)
        setTranscript(transcriptData.text)
        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  },)

  const textToSpeech = async () => {
      let prompt = transcript
      const { data } = await axios.post("http://localhost:9000/user-input",{ prompt }, config);
      setResponseAudio(data.mp3Answer);
  };  
  
    return (
        <div>
            <div style={{textAlign: "center"}}>Your Question</div>
            <audio ref={audioPlayer} src={blobURL} controls='controls' />
            <div style = {{marginLeft: 55}}>
                <Button colorScheme = "blue"width = "25%"style = {{marginTop: 15}} isLoading = {isLoading} disabled={isRecording} onClick={startRecording}>Start</Button>
                <Button colorScheme = "blue"width = "25%"style = {{marginTop: 15}} isLoading = {isLoading} disabled={!isRecording} onClick={stopRecording}>Stop</Button>
                <Button colorScheme = "blue"width = "25%"style = {{marginTop: 15}} isLoading = {isLoading} onClick={submitTranscriptionHandler}>Submit</Button>
                {transcriptData
                    .status === "completed" 
                        ? (<p>{transcript}</p>) 
                        : (<p>{transcriptData.status}</p>)
                }
            </div><br/>
            <div style={{ border: "2px solid yellow", textAlign: "center"}}>
                <div style={{textAlign: "center", marginTop: '5px' }}></div>
                <input style={{textAlign: "center", margin: "auto", marginTop: '15px'}} type='text' value={transcript} placeholder='Answer Pending....' onChange={(e) => setTranscript(e.target.value)} />
                <Button colorScheme = "blue"width = "80%"style = {{marginTop: 15}} isLoading = {isLoading} onClick={textToSpeech}>Answer</Button>
                <audio src={responseAudio} controls />
                <br/><br/>
            </div>
        </div>
    )
}

export default Recorder