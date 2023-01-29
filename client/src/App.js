import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage} exact />
    </div>
  );
}

export default App;