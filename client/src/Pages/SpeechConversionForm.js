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
import Login from "../Components/Login";
import Register from "../Components/Register";

const SpeechConversionForm = () => {
  const history = useHistory();
  const [showDirections, setShowDirections] = useState(false)
  const [prompt, setPrompt] = useState("");
  const showQuestionInputDirections = () => setShowDirections(!showDirections)
  const formStyling = {float: 'right',  marginTop: '300px'}
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div>
      <div style={formStyling}>
        <Container maxWidth="sm" centerContent>
          <div >
            <Box bg="#191919" w="100%" p={4} borderRadius="lg" borderWidth="5px" color="white">

                <Tabs >
                  <Box bg="#191919" w="100%" p={4} borderRadius="lg" borderWidth="0px">
                    <TabList bg="#191919" p={1} borderRadius="lg" borderWidth="0px">
                      <Tab size='sm' bg="#191919" p={1}  borderRadius="lg" borderWidth="10px">Enter Your Question Below</Tab>

                      <Tab size='sm' bg="#191919" p={1} borderRadius="lg" borderWidth="10px">Speak Into Microphone</Tab>
                    </TabList>
                  </Box>
                  <TabPanels>
                    <TabPanel>
                      <Login />
                    </TabPanel>
                    <TabPanel>
                      <Register />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SpeechConversionForm;