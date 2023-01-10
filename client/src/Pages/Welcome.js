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
  Image,
  Input 
} from "@chakra-ui/react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Welcome = () => {
  const history = useHistory();
  const [showDirections, setShowDirections] = useState(false)
  const showQuestionInputDirections = () => setShowDirections(!showDirections)
  const imageUrl = 'https://loginregistrationapp.s3.amazonaws.com/chatBG-SVG.svg';
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <div style={style}>
      <Container maxWidth="xl" centerContent>
        {/* <button onClick={WelcomePageClickHandler}>Click me!</button> */}
          {
          showDirections 
            ? 
            <Box d="flex" justifyContent="center"  bg="#E6FFFA" fontSize="lg" fontFamily="Work sans" color="red" w='100%' m="0px 0px 5px 0px" onClick={showQuestionInputDirections}> You can ask a question by clicking the left tab & submiting a question OR clicking the right tab & submiting a question by speaking it into your devices microphone</Box> 
            : 
            <Circle size='100px' bg="#008000" m="200px 0px -28px 0px" color='white'> 
              <Button bg="#000000" fontSize="sm" fontFamily="Work sans" color="red" m="0px 0px 5px 0px" w='90%' onClick={showQuestionInputDirections}> How it works?</Button> 
            </Circle>
          }

        <Box bg="#FFBF00" w="100%" p={4} borderRadius="lg" borderWidth="0px" color="black">
          <Box d="flex" justifyContent="center" p={1} variant="soft-rounded" bg="#000000" w="100%" m="5px 10px 25px 5px" borderRadius="lg" borderWidth="5px"></Box>
          <Tabs >
            <Box bg="#001000" w="100%" p={4} borderRadius="lg" borderWidth="0px">
              <TabList bg="#000000" p={1} borderRadius="lg" borderWidth="0px">
                <Tab size='sm' bg="#b1feb1" p={1}  borderRadius="lg" borderWidth="10px">Enter Your Question Below</Tab>
                <Image
                  borderRadius='full'
                  boxSize='250px'
                  src='https://loginregistrationapp.s3.amazonaws.com/ChatGPTGreenLogo.PNG'
                  alt='<--Text Or Microphone-->'
                />
                <Tab size='sm' bg="#b1feb1" p={1} borderRadius="lg" borderWidth="10px">Speak Into Microphone</Tab>
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
      </Container>
    </div>
  );
};

export default Welcome;