import React from "react";
import "./Instructions.css";
import { Link } from "react-router-dom";

function WelcomePage() {
    const googleFormLink = process.env.REACT_APP_GOOGLE_FORM_LINK;
    return (
        <div class="instructions-page">
            <h1>Instructions</h1>
            {/* below is the button to google form */}
            <a
                href={googleFormLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg survey-btn"
            >
                Go to survey
            </a>
            
            <ul>
                <li>
                    Read the predefined questions carefully and provide your
                    answers.
                </li>
                <li>
                    Interact with both the control chatbot and Liji the Chatbot
                    by asking identical research questions.
                </li>
                <li>
                    Try to achieve the "emotional" goals you set for the
                    chatbots during your interactions.
                </li>
                <li>
                    Take note of any negative interactions and mark off achieved
                    goals.
                </li>
                <li>
                    After interacting with both chatbots, complete the survey to
                    rate and compare their performance.
                </li>
            </ul>
            <Link to="/questions">
                <button className="next-btn">Next</button>
            </Link>
        </div>
    );
}

export default WelcomePage;
