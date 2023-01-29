import { useHistory } from "react-router";
import React, { useState } from "react";
import axios from "axios";
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
import BackgroundImage from "./BackgroundImage";
import SpeechConversionForm from "./SpeechConversionForm"
import AudioInstructions from "./AudioInstructions"
import SpeechConversionFormHeader from "./SpeechConversionFormHeader";

const Welcome = () => {
  // const history = useHistory();
  // const [showDirections, setShowDirections] = useState(false)
  // const [prompt, setPrompt] = useState("");
  // const showQuestionInputDirections = () => setShowDirections(!showDirections)
  // const imageUrl = 'https://i.ibb.co/mvW7zjv/Black-and-White-Silhouette-Motivational-Quotes-Facebook-Cover.png';
  // const style = {backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover'};
  // const style2 = {float: 'right'}
  // const handleChange = (event) => {
  //   setPrompt(event.target.value);
  // };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}><BackgroundImage /></div>
      <div style={{ position: "absolute", right: 0 }}><SpeechConversionForm /></div>
      <div style={{ position: "absolute", right: 0 }}><SpeechConversionFormHeader /></div>
      <div style={{ position: "absolute", right: 125 }}><AudioInstructions /></div>
    </div>
  );
};

export default Welcome;