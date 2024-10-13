import React from "react";

import "./BodyModel.css"; // This pulls the CSS file into your app

const frontParts = [
  {
    name: "abs",
    image: "body_parts_model/abs_full.png",
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: "upper abs",
    image: "body_parts_model/abs_upper.png",
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: "lower abs",
    image: "body_parts_model/abs_lower.png",
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: "biceps",
    image: "body_parts_model/bicep.png",
    offsetX: -400,
    offsetY: -605,
    opacity: 0.1,
  },
  {
    name: "tibia",
    image: "body_parts_model/calves_front.png",
    offsetX: -375,
    offsetY: 300,
    opacity: 0.1,
  },
  {
    name: "chest",
    image: "body_parts_model/chest.png",
    offsetX: -400,
    offsetY: -600,
    opacity: 0.1,
  },
  {
    name: "forearms",
    image: "body_parts_model/forearms_front.png",
    offsetX: -100,
    offsetY: -450,
    rotation: 30,
    scale: 0.8,
  },
  {
    name: "obliques",
    image: "body_parts_model/obliques.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "shoulder_front",
    image: "body_parts_model/shoulder_front.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "thigh_inner",
    image: "body_parts_model/thigh_inner.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "thigh_lower",
    image: "body_parts_model/thigh_lower.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "thigh_outer",
    image: "body_parts_model/thigh_outer.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "thigh",
    image: "body_parts_model/thigh.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "back_lower",
    image: "body_parts_model/back_lower.png",
  },
  {
    name: "calves",
    image: "body_parts_model/calves.png",
  },
  {
    name: "forearms_back",
    image: "body_parts_model/forearms_back.png",
  },
  {
    name: "glutes",
    image: "body_parts_model/glutes.png",
  },
  {
    name: "hamstring",
    image: "body_parts_model/hamstring.png",
  },
  {
    name: "lats",
    image: "body_parts_model/lats.png",
  },
  {
    name: "neck",
    image: "body_parts_model/neck.png",
  },
  {
    name: "shoulder_back",
    image: "body_parts_model/shoulder_back.png",
  },
  {
    name: "trapezius",
    image: "body_parts_model/trapezius.png",
  },
  {
    name: "triceps",
    image: "body_parts_model/triceps.png",
  },
];

export default function App() {
  return (
    <div className="body-model">
      <div className="front-parts">
        <img
          src="body front blank.png"
          style={{
            transform: `translate(0px, 1700px) 
                          rotate(0deg) 
                          scale(0.4)`,
          }}
        />
        <img
          src="body back blank.png"
          style={{
            transform: `translate(0px, 0px) 
                          rotate(0deg) 
                          scale(1)`,
          }}
        />
        {/* <img
          src="body back blank.png"
          style={{
            transform: `translate(400px, 0px) 
                          rotate(0deg) 
                          scale(0.23)`,
          }}
        /> */}
      </div>
    </div>
  );
}
