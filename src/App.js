import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import LowerBody from "./components/LowerBody";
import Chest from "./components/Chect";
import Back from "./components/Back";
import Shoulder from "./components/Shoulder";
import Arm from "./components/Arm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chest" element={<Chest />} />
      <Route path="/lower" element={<LowerBody />} />
      <Route path="/back" element={<Back />} />
      <Route path="/shoulder" element={<Shoulder />} />
      <Route path="/arm" element={<Arm />} />
    </Routes>
  );
};

export default App;
