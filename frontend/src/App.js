import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Instructions from "./Instructions";
import VanillaChat from "./VanillaChat";
import LijiChat from "./LijiChat";
import Complete from "./Complete";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/chatbot2" element={<VanillaChat />} />
          <Route path="/chatbot1" element={<LijiChat />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
