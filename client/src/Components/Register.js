import React, { useState } from "react";
import { useMutate } from "restful-react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/button";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";


const Upload = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [uploadedEmail, setUploadedEmail] = useState("");
  const handleClick = () => setShow(!show);
  const config = { headers: { "Content-Type": "application/json" } };
  let sessionData;
  function start() {
    console.log(performance.now()); 
    return performance.now()
  }
  function end() {
    console.log(performance.now()); 
    return performance.now()
  }
  function tte() {
    console.log(end() - start());
    return end() - start()
  }

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
    console.log(image);
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
    previewFiles(file);
  };

    const handleSubmit = async (e, req, res) => {
        start();
        e.preventDefault();
        const result = await axios.post(
        "http://localhost:8800/user/register",
        {image: image, name, email, password, confirmPassword}, config
        ).then(async (result)=>{
            console.log('in then');
            console.log(result.data);
            let regResponseObject = result.data;
            const validationResponse = () => {
                if (regResponseObject.errors) {
                    console.log(regResponseObject.errors[0].msg);
                    toast(regResponseObject.errors[regResponseObject.errors.length -1].msg)
                } else {
                    toast(regResponseObject.msg)
                }
            } 
            validationResponse()
            sessionStorage.setItem("sessionData", JSON.stringify(regResponseObject));
            sessionStorage.setItem("email", regResponseObject.email)
            let useremail = sessionStorage.getItem("email")
            console.log(useremail);
            console.log(result.data.email)
            setLoading(false);
            console.log('hello');
            // history.push("/home");
            try {
                const uploadedImg = result.data.picture;
                setUploadedImg(uploadedImg);
                const uploadedEmail = result.data.email;
                setUploadedEmail(uploadedEmail)
                console.log(uploadedEmail);
                end();
                tte();
            } catch (error) {
                setLoading(false);
            }
        })
    }

  return (
    <div>
        <VStack spacing="5px" color="black">
            <Button 
                colorScheme = "blue"
                width = "100%"
                style = {{marginTop: 15}}
                onClick = {handleSubmit}
                isLoading = {loading}
                m="20px 0px 15px 0px"
            >
                Click Here To Speak Into Mic And Ask A Question
            </Button>

            <FormControl>
                    <Input
                        placeholder="Questions Will Appear Here After You Click 'ASK' Start To Speak"
                        onChange={(e) => setName(e.target.value)} //Set name to whats entered in name field
                    />
            </FormControl>

            <form onSubmit={(e) => handleSubmit(e)}></form>
            
            <Button 
                colorScheme = "blue"
                width = "50%"
                style = {{marginTop: 15}}
                onClick = {handleSubmit}
                isLoading = {loading}
            >
                Submit Question
            </Button>
        </VStack>
    </div>

  );
};

export default Upload;
