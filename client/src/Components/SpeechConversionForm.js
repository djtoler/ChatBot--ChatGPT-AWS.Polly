import React, { useState } from "react";
import { Container, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Image} from "@chakra-ui/react";
import TextToSpeech from "./TextToSpeech";
import SpeechToText from "./SpeechToText";

const SpeechConversionForm = () => {
  const formStyling = { float: "right", marginTop: "300px" };
  const [prompt, setPrompt] = useState("");

  return (
    <div>
      <div style={formStyling}>
        <Container maxWidth="sm" centerContent>
          <div>
            <Box bg="#191919"  w="100%"  p={4}  borderRadius="lg"  borderWidth="5px"  color="white">
              <Tabs>

                <Box  bg="#191919"  w="100%"  p={4}  borderRadius="lg"  borderWidth="0px">
                  <TabList  bg="#191919"  p={1}  borderRadius="lg"  borderWidth="0px">
                    <Tab  size="sm"  bg="#191919"  p={1}  borderRadius="lg"  borderWidth="10px">  Enter Your Question Below </Tab>
                    <Tab  size="sm"  bg="#191919"  p={1}  borderRadius="lg"  borderWidth="10px">   Speak Into Microphone </Tab>
                  </TabList>
                </Box>

                <TabPanels>
                  <TabPanel> <TextToSpeech /> </TabPanel>
                  <TabPanel> <SpeechToText /> </TabPanel>
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
