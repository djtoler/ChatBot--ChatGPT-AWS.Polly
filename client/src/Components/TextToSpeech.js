import { Button } from "@chakra-ui/button";
import { FormLabel, FormControl } from '@chakra-ui/form-control';
import {Input} from '@chakra-ui/input';
import {VStack} from '@chakra-ui/layout';
import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";

const TextToSpeech = (props) => {
    const [loading, setLoading] = useState();
    const [prompt, setPrompt] = useState("");
    const [textQuestion, setTextQuestion] = useState();
    const [responseData, setResponseData] = useState();
    const [responseAudio, setResponseAudio] = useState("");
    const [audioReady, setAudioReady] = useState(false);

    const config = { headers: { "Content-type": "application/json" }};
    const handleChange = (event) => {setPrompt(event.target.value)};

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(`Hello, ${prompt}!`);
      const { data } = await axios.post(
        "http://localhost:9000/user-input",
        { prompt }, config
      );
      setResponseData(data.answer); 
      setResponseAudio(data.mp3Answer);
      setAudioReady(true);
  };  

  useEffect(() => {
    if(audioReady) {
        const audio = document.getElementById('audio');
        audio.play();
    }
  }, [audioReady])
  

    return (
        <VStack spacing="5px" color="black">
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormControl  id="first-name">
                    <FormLabel>
                        <Input placeholder="Enter Your Question Here" type="text" value={prompt} />
                    </FormLabel>
                    <Button colorScheme = "blue"width = "100%" style = {{marginTop: 15}} onClick = {handleSubmit} isLoading = {loading}>
                        Submit
                    </Button>
                </FormControl>
            </form>
            <p>{JSON.stringify(responseData)}</p>
            {audioReady} <audio id="audio" src={responseAudio} controls></audio> 
        </VStack> 
    );
}
export default TextToSpeech