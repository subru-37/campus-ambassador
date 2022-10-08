import React from "react";
import "./App.css";
import Main from "./components/Main/Main/Main";
import Rewards from "./components/Rewards/Rewards/Rewards";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";

const App = () => (
  <div className="App">
    <Main />
    <Rewards />
    <Events />
    <Contact />
  </div>
);

export default App;
