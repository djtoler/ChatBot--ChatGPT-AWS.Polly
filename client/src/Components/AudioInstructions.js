import React, { useState } from "react";
import {Container, Box} from "@chakra-ui/react";

const AudioInstructions = () => {
  const [showDirections, setShowDirections] = useState(false);
  const [prompt, setPrompt] = useState("");
  const audioComponentStyle = { float: "right", marginTop: "20px" };
  const audioWav = 'https://storage.googleapis.com/djs-bucket/Click%20the%20start%204.wav'
  
  return (
    <div>
      <div style={audioComponentStyle}>
        <Container maxWidth="100px" centerContent>
          <div>
            <Box bg="#FBFBF9" w="100%" p={3} borderRadius="lg" borderWidth="0px" color="black" >
              <Box d="flex" justifyContent="center" p={1} variant="soft-rounded" bg="#000000" w="100%" m="5px 10px 25px 5px" borderRadius="lg" color="white" >Instructions</Box>
              <audio autoplay controls src={audioWav} ></audio>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AudioInstructions;
