import React from "react";
import "./ChatIcon.css";
import { useAuth } from "../../AuthContext";

const ChatIcon = () => {
  const { chatPopup, setChatPopup } = useAuth();

  return (
    <button
      className="chat-icon"
      onClick={() => {
        setChatPopup(!chatPopup);
        console.log("Chat popup state:", chatPopup);
      }}
    >
      <img
        src="chat.png"
        alt="Chat"
        style={{
          transform: `translate(0px, 0px)
                        rotate(0deg) 
                        scale(0.1)`,
        }}
      />
    </button>
  );
};

export default ChatIcon;
