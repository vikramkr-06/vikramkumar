import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JsonData from "./JsonData";

const ChatPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    // Find the user from JSON data
    const user = JsonData.find((u) => u.id === parseInt(userId));

    // State to manage messages
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            setMessages((prev) => [...prev, inputMessage]);
            setInputMessage("");
        }
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-gray-800 text-white flex items-center p-4">
                <img
                    src={user.profile_photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <h1 className="text-lg font-semibold">{user.name}</h1>
                <button
                    onClick={() => navigate("/mainwebpage")}
                    className="ml-auto bg-gray-600 px-3 py-1 rounded"
                >
                    Back
                </button>
            </header>

            {/* Chat Section */}
            <main className="flex-1 p-4 overflow-y-auto">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-xs self-end"
                        >
                            {msg}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No messages yet. Start chatting!</p>
                )}
            </main>

            {/* Input Box */}
            <footer className="p-4 bg-gray-100 flex items-center">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-lg mr-2"
                    placeholder="Type a message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Send
                </button>
            </footer>
        </div>
    );
};

export default ChatPage;
