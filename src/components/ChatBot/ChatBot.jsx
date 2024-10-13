import React, { useState, useEffect, useRef } from "react";
import { BedRockPersonalTrainer } from "./BedRockAPICaller";
import "./ChatBot.css";
import { useAuth } from "../../AuthContext";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const trainer = useRef(new BedRockPersonalTrainer());

  const { chatPopup, setChatPopup } = useAuth();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = { text: "hi", sender: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput("");
  };

  const handleReset = () => {
    trainer.current.reset_conversation();
    setMessages([]);
  };

  return (
    <div className="chatbot-container">
      {chatPopup && (
        <div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isLoading && <div className="message bot">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your fitness question..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
          <button onClick={handleReset} className="reset-button">
            Reset Conversation
          </button>
        </div>)}

    </div>
  );
};

export default ChatBot;
