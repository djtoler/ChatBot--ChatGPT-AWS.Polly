import { useHistory } from "react-router";
import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Center, 
  Square, 
  Circle,
  Image 
} from "@chakra-ui/react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Welcome = () => {
  const history = useHistory();
  const [showDirections, setShowDirections] = useState(false)

  const showQuestionInputDirections = () => setShowDirections(!showDirections)

  return (
    <Container maxWidth="xl" centerContent>
      {/* <button onClick={WelcomePageClickHandler}>Click me!</button> */}
      
        <Box d="flex" justifyContent="center" p={1} bg="white" w="100%" m="5px 10px 25px 10px" borderRadius="lg" borderWidth="1px">
          <Box d="flex" justifyContent="center" bg='#F7FAFC' w='100%' color='black' fontSize="xs" as='i'>
            Powered by OpenAI
          </Box>
        </Box>

        {
        showDirections 
          ? 
          <Box d="flex" justifyContent="center"  bg="#E6FFFA" fontSize="lg" fontFamily="Work sans" color="red" w='100%' m="0px 0px 5px 0px" onClick={showQuestionInputDirections}> You can ask a question by clicking the left tab & submiting a question OR clicking the right tab & submiting a question by speaking it into your devices microphone</Box> 
          : 
          <Circle size='100px' bg='#9AE6B4' color='white'> 
            <Button bg="#E6FFFA" fontSize="sm" fontFamily="Work sans" color="red" m="0px 0px 5px 0px" w='100%' onClick={showQuestionInputDirections}> How it works?</Button> 
          </Circle>
        }

      <Box
        bg="#B2F5EA"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="black"
        
      >
        <Box d="flex" justifyContent="center" p={1} variant="soft-rounded" bg="white" w="100%" m="5px 10px 25px 10px" borderRadius="lg" borderWidth="1px">

        </Box>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Enter Text Below</Tab>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='../Assets/ChatGPTGreenLogo.PNG'
              alt='<--Text Or Microphone-->'
            />
            <Tab width="50%">Speak Into Microphone</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Welcome;