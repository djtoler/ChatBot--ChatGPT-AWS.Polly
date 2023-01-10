import { Button } from "@chakra-ui/button";
import { FormLabel, FormControl } from '@chakra-ui/form-control';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input';
import {VStack} from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import axios from "axios";


const Login = (props) => {
    // Set useState hooks for form fields
    const [email, setEmail] = useState()   
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState()
    const [status, setStatus] = useState(false)      
    // Set useState hook & function for showing & concealing password entry
    const [show, setShow] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState()
    const [userData, setUserData] = useState()
    const [redirect, setRedirect] = useState(false)
    const [user, setUser] = useState("");
    const [gameId, setGameId] = useState();
    const [name, setName] = useState();
    // console.log(user);
    // const [userEmail, setUserEmail] = useState(user.email);
    // const [userId, setUserId] = useState(user._id);

    const handleClick = () => setShow(!show)
    const toast = useToast();
    const history = useHistory();
    let passToken;
    let currentUserData;
    let passGameId;

    const submitHandler = async () => {
        if (!email || !password) {
          setLoading(false);
          return;
        }
        try {
            const config = {
                headers: {
                    "Content-type":"application/json",
                },
            };

        }
        catch (error ){
            console.log(error.response.data);
        }   
    }
    return (
        <VStack spacing="5px" color="black">
            <FormControl id="first-name" isRequired>
                <FormLabel>Question</FormLabel>{" "}
                    <Input
                        placeholder="Enter Your Question Here"
                        onChange={(e) => setName(e.target.value)} //Set name to whats entered in name field
                    />
            </FormControl>
            <Button 
                colorScheme = "blue"
                width = "50%"
                style = {{marginTop: 15}}
                isLoading = {loading}
            >
                Submit Question
            </Button>
        </VStack>
    );
}
export default Login