import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>LIJI</h1>
            <p>
                Welcome to the Liji chatbot research! We appreciate your
                participation in our study. To begin, please click the button
                below.
            </p>
            <Link to="/instructions">
                <button className="start-btn">Start</button>
            </Link>
        </div>
    );
}

export default WelcomePage;
