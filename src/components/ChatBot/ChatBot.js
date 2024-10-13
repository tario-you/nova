import React, { useState } from 'react';
import PersonalTrainerBot from './PersonalTrainerBot';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bot = new PersonalTrainerBot();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prevMessages => [...prevMessages, { text: userMessage, user: true }]);
    setInput('');

    try {
      const response = await bot.chat(userMessage);
      setMessages(prevMessages => [...prevMessages, { text: response, user: false }]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      setMessages(prevMessages => [...prevMessages, { text: 'Sorry, I encountered an error. Please try again.', user: false }]);
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
