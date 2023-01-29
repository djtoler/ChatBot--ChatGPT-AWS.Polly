import React from "react";
import BackgroundImage from "../Components/BackgroundImage";
import SpeechConversionForm from "../Components/SpeechConversionForm";
import AudioInstructions from "../Components/AudioInstructions";
import SpeechConversionFormHeader from "../Components/SpeechConversionFormHeader";

const LandingPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}><BackgroundImage /></div>
      <div style={{ position: "absolute", right: 0 }}><SpeechConversionForm /></div>
      <div style={{ position: "absolute", right: 0 }}><SpeechConversionFormHeader /></div>
      <div style={{ position: "absolute", right: 125 }}><AudioInstructions /></div>
    </div>
  );
};

export default LandingPage;
