import { useHistory } from "react-router";
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Button,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Circle,
  Image,
} from "@chakra-ui/react";
import Login from "./TextToSpeech";
import Register from "./SpeechToText";

const AudioInstructions = () => {
  const history = useHistory();
  const [showDirections, setShowDirections] = useState(false);
  const [prompt, setPrompt] = useState("");
  const showQuestionInputDirections = () => setShowDirections(!showDirections);
  const style2 = { float: "right", marginTop: "20px" };
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div>
      <div style={style2}>
        <Container maxWidth="100px" centerContent>
          <div>
            <Box
              bg="#FBFBF9"
              w="100%"
              p={4}
              borderRadius="lg"
              borderWidth="0px"
              color="black"
            >
              <Box
                d="flex"
                justifyContent="center"
                p={1}
                variant="soft-rounded"
                bg="#000000"
                w="100%"
                m="5px 10px 25px 5px"
                borderRadius="lg"
                borderWidth="5px"
                color="white"
              >
                {" "}
                Instructions
              </Box>
              <audio id="audio" controls autoplay></audio>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AudioInstructions;
