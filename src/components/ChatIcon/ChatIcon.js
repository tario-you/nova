import React from "react";
import "./ChatIcon.css";

const ChatIcon = () => {
  return (
    <div className="chat-icon">
      <img
        src="chat.png"
        style={{
          // position: "absolute",
          transform: `translate(0px, 0px)
                          rotate(0deg) 
                          scale(0.1)`,
        }}
      />
    </div>
  );
};

export default ChatIcon;
