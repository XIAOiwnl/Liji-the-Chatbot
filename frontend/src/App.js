import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Instructions from "./Instructions";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/instructions" element={<Instructions />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
