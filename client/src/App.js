import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const Form = () => {
  const [prompt, setPrompt] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Hello, ${prompt}!`);

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await axios.post(
      "http://localhost:9000/user-input",
      { prompt },
      config
    );
    setResponseData(data); 
    console.log(data);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Ask a question:
        <input
          type="text"
          value={prompt}
          onChange={handleChange}
          className="input-box"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <p>{JSON.stringify(responseData)}</p>
  </div>
  );
};

export default Form;