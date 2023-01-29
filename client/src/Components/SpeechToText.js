import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";


const SpeechToText = () => {
  const [name, setQuestion] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e, req, res) => { }

  return (
    <div>
        <VStack spacing="5px" color="black">
            <Button colorScheme = "blue"width = "100%"style = {{marginTop: 15}}onClick = {handleSubmit}isLoading = {loading}m="20px 0px 15px 0px">Click Here To Ask A Question</Button>
            
            <FormControl>
              <Input placeholder="Questions Will Appear Here" onChange={(e) => setQuestion(e.target.value)} />
            </FormControl>

            <form onSubmit={(e) => handleSubmit(e)}></form>
            
            <Button colorScheme = "blue"width = "50%"style = {{marginTop: 15}} onClick = {handleSubmit}isLoading = {loading}>Submit Question</Button>
        </VStack>
    </div>

  );
};

export default SpeechToText;
