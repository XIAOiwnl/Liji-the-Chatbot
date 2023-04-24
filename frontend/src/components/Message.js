import React from "react";

const Message = ({ message, sender }) => {
    const isUser = sender === "user";

    return (
        <div
            className={`${
                isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-lg my-2 w-auto max-w-sm ${
                isUser ? "ml-auto" : "mr-auto"
            }`}
        >
            {message}
        </div>
    );
};

export default Message;
