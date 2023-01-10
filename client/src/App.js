// import React, { useState } from "react";
// import "./App.css";
// import axios from "axios";

// const Form = () => {
//   const [prompt, setPrompt] = useState("");
//   const [responseData, setResponseData] = useState("");

//   const handleChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(`Hello, ${prompt}!`);

//     const config = { headers: { "Content-type": "application/json" } };

//     const { data } = await axios.post(
//       "http://localhost:9000/user-input",
//       { prompt },
//       config
//     );
//     console.log(data);
//     setResponseData(data); 
//     console.log(responseData);
    
//   };

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ask a question:
//         <input
//           type="text"
//           value={prompt}
//           onChange={handleChange}
//           className="input-box"
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//     <p>{JSON.stringify(responseData)}</p>
//   </div>
//   );
// };

// export default Form;


import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import SuccessfulLogin from './Pages/SuccessfulLogin';
import Welcome from "./Pages/Welcome";
import UserLogin from './Pages/UserLogin';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Welcome} exact />
      <Route path="/login" component={UserLogin} exact/>
      <Route path="/success" component={SuccessfulLogin} exact/>
    </div>
  );
}

export default App;