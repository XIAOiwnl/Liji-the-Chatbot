import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questions.css";

function Questions() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");

    // Example hint answers for the predefined questions
    const [exampleAnswer1] = useState("Sunny and warm."); 
    const [exampleAnswer2] = useState("Working from 9 to 5, then going to the gym."); 


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Store the predefined questions and answers
        const predefinedQuestions = [
            {
                question: "How is the weather today?",
                answer: answer1,
            },
            {
                question: "What is your schedule look like for today?",
                answer: answer2,
            },
        ];

        // Navigate to LijiChat and pass the predefinedQuestions
        navigate(`/chatbot1`, {
            state: { predefinedQuestions },
        });
    };

    return (
        <div className="questions-page">
            <h1>Predefined Questions</h1>
            <form id="questions-form" onSubmit={handleSubmit}>
                <div className="question">
                    <h3>Question 1</h3>
                    <label htmlFor="question1">
                        How is the weather today?{" "}
                    </label>
                    <textarea
                        name="question1"
                        rows="4"
                        cols="50"
                        required
                        value={answer1}
                        onChange={(e) => setAnswer1(e.target.value)}
                        placeholder={exampleAnswer1}
                    />
                </div>
                <div className="question">
                    <h3>Question 2</h3>
                    <label htmlFor="question2">
                        What is your schedule look like for today?{" "}
                    </label>
                    <textarea
                        name="question2"
                        rows="4"
                        cols="50"
                        required
                        value={answer2}
                        onChange={(e) => setAnswer2(e.target.value)}
                        placeholder={exampleAnswer2}
                    />
                </div>
                <input className="submit-btn" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Questions;
