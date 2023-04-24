import React, { useState, useEffect } from "react";
import Message from "./components/Message";
import { useLocation, useNavigate } from "react-router-dom";

const LijiChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const location = useLocation();
    const predefinedQuestions = location.state?.predefinedQuestions ?? [];
    const navigate = useNavigate();

    const sendMessage = async () => {
        if (input.trim() === "") return;

        const updatedMessages = [
            ...messages,
            { message: input, sender: "user" },
        ];

        setMessages(updatedMessages);
        setInput("");

        const response = await fetch("http://localhost:3001/chatbot1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                input,
                messages: updatedMessages,
                predefinedQuestions,
            }),
        });

        const data = await response.json();
        setMessages([
            ...updatedMessages,
            { message: data.message, sender: "assistant" },
        ]);
    };

    const handleFinishedTalking = () => {
        if (
            window.confirm(
                "Are you finished talking to the current chatbot model?"
            )
        ) {
            navigate("/chatbot2");
        }
    };

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                <div className="text-center mb-6">
                    {" "}
                    {/* Add this div */}
                    <h2 className="text-2xl font-bold text-blue-500 mb-2">
                        Chatbot 1
                    </h2>
                    <p className="text-sm text-gray-600 italic">
                        Start talking by sending your first message!
                    </p>
                </div>{" "}
                {/* Close the div */}
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        message={msg.message}
                        sender={msg.sender}
                    />
                ))}
            </div>
            <div className="flex-none flex p-4 bg-white">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") sendMessage();
                    }}
                    className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={sendMessage}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Send
                </button>
                <button
                    onClick={handleFinishedTalking}
                    className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                    End Chat
                </button>
            </div>
        </div>
    );
};

export default LijiChat;
