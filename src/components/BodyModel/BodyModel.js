import React, { useContext } from "react";

import "./BodyModel.css"; // This pulls the CSS file into your app

import { useAuth } from "../../AuthContext";
import { useLevel } from "../../LevelContext";

export default function App() {
  const { bicep, setBicep } = useAuth();
  const { level, currentXP, requiredXP } = useLevel();

  return (
    <div className="body-model">
      <div
        className="level-display"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "bold",
          width: "200px",
        }}
      >
        <p>Level: {level}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <progress
            value={currentXP}
            max={requiredXP}
            style={{ width: "100%", height: "20px" }}
          />
          <span>
            {currentXP}/{requiredXP}
          </span>
        </div>
      </div>

      <div className="front-parts">
        <img
          src="body front blank.png"
          style={{
            position: "absolute",
            transform: `translate(-1100px,  -1425px) 
                          rotate(0deg) 
                          scale(0.25)`,
          }}
        />
        <img
          src="body back blank.png"
          style={{
            position: "absolute",
            transform: `translate(-570px, -1625px)
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
                transform: `translate(-240px, -380px)
                            rotate(0deg)
                            scale(0.24)`,
              }}
            />
            <img
              src="bicep red.png"
              style={{
                position: "absolute",
                transform: `translate(-446px, -380px)
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
                transform: `translate(-240px, -383px)
                            rotate(0deg)
                            scale(0.24)`,
              }}
            />
            <img
              src="bicep yellow.png"
              style={{
                position: "absolute",
                transform: `translate(-446px, -383px)
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
