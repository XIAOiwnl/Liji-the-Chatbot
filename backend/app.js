require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const PREDEFINED_INSTRUCTIONS =
    "You will be talking to a user through our messaging app. Take more care of the user based on their answers to our predefined questions.";

const chatGPTRequest = async (messages, additional_context = "") => {
    const formattedMessages = [
        { role: "system", content: additional_context },
        ...messages.map((msg) => ({ role: msg.sender, content: msg.message })),
    ];

    // console.log(formattedMessages);

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

app.post("/chatbot2", async (req, res) => {
    const { input, messages } = req.body;
    const chatResponse = await chatGPTRequest(messages);
    res.json({ message: chatResponse });
});

app.post("/chatbot1", async (req, res) => {
    const { input, messages, predefinedQuestions } = req.body;
    const additional_context =
    `${PREDEFINED_INSTRUCTIONS}` +
    predefinedQuestions
        .map(
            (qa, index) =>
                `Predefined question ${index + 1}: ${
                    qa.question
                } Predefined answer ${index + 1}: ${qa.answer}`
        )
        .join(" ");

    const chatResponse = await chatGPTRequest(messages, additional_context);
    res.json({ message: chatResponse });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
