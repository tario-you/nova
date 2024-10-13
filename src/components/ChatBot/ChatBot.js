import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import "./ChatBot.css";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const { chatPopup, setChatPopup } = useAuth();

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatHistory([
        ...chatHistory,
        { text: message, sender: "user" },
        { text: "hi", sender: "bot" },
      ]);
      setMessage("");
    }
  };

  return (
    <div>
      {chatPopup && (
        <div className="chat-interface">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`chat-message ${chat.sender}`}>
                {chat.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
