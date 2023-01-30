import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import Recorder from "../Components/Recorder";


const SpeechToText = () => {
  const [name, setQuestion] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e, req, res) => { }

  return (
    <div>
        <VStack spacing="5px" color="black">
            <br/><br/>
            <div style={{ position: "absolute", right: 30, color:"white" }}>
              <Recorder />
            </div>
            <form onSubmit={(e) => handleSubmit(e)}></form>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </VStack>
    </div>

  );
};

export default SpeechToText;
