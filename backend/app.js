require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const PREDEFINED_INSTRUCTIONS =
    `Your job is to act like a chatbot, not an assistant, that understands user's emotional state, NOT AN ASSISTANT, keep conversations going, 
    if you need to ask questions to the user to achieve this task, do ask questions.
    Here is some information that might help you connect with them better, the weather today is: "`;

const chatGPTRequest = async (messages, additional_context = "") => {
    const formattedMessages = [
        { role: "system", content: additional_context },
        ...messages.map((msg) => ({ role: msg.sender, content: msg.message })),
    ];

        console.log(formattedMessages);

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: formattedMessages,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.5,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
        }
    );

    return response.data.choices[0].message.content.trim();
};

app.post("/api/chatbot2", async (req, res) => {
    const { input, messages } = req.body;
    const chatResponse = await chatGPTRequest(messages);
    res.json({ message: chatResponse });
});

app.post("/api/chatbot1", async (req, res) => {
    console.log("Request received at /api/chatbot1");

    const { input, messages, predefinedQuestions } = req.body;
    const additional_context =
        `${PREDEFINED_INSTRUCTIONS}` +
        predefinedQuestions[0]['answer'] +
        '" and their schedule is: "' +
        predefinedQuestions[1]['answer'] +
        '". REMEMBER YOU ARE A CHATBOT NOT AN ASSISTANT, you do not assist, you converse.'

    const chatResponse = await chatGPTRequest(messages, additional_context);
    res.json({ message: chatResponse });
});

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Catch-all route to serve the index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
