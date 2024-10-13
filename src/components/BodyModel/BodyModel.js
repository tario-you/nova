import React, { useContext } from "react";

import "./BodyModel.css"; // This pulls the CSS file into your app

import { useAuth } from "../../AuthContext";

export default function App() {
  const { username, setUsername, password, setPassword, bicep, setBicep } =
    useAuth();

  return (
    <div className="body-model">
      <div className="front-parts">
        <img
          src="body front blank.png"
          style={{
            position: "absolute",
            transform: `translate(-1000px,  -1425px) 
                          rotate(0deg) 
                          scale(0.25)`,
          }}
        />
        <img
          src="body back blank.png"
          style={{
            position: "absolute",
            transform: `translate(-340px, -1625px)
                          rotate(0deg) 
                          scale(0.22)`,
          }}
        />

        {bicep == "red" && (
          <div>
            <img
              src="bicep red.png"
              style={{
                position: "absolute",
                transform: `translate(-140px, -380px)
                            rotate(0deg)
                            scale(0.24)`,
              }}
            />
            <img
              src="bicep red.png"
              style={{
                position: "absolute",
                transform: `translate(-346px, -380px)
                          rotate(0deg)
                          scale(0.24)
                          scaleX(-1)`,
              }}
            />
          </div>
        )}

        {bicep == "yellow" && (
          <div>
            <img
              src="bicep yellow.png"
              style={{
                position: "absolute",
                transform: `translate(-140px, -383px)
                            rotate(0deg)
                            scale(0.24)`,
              }}
            />
            <img
              src="bicep yellow.png"
              style={{
                position: "absolute",
                transform: `translate(-346px, -383px)
                          rotate(0deg)
                          scale(0.24)
                          scaleX(-1)`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
