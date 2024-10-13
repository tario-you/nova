import React from 'react';

import './BodyModel.css'; // This pulls the CSS file into your app

const frontParts = [
  {
    name: 'abs',
    image: 'body_parts/abs_full.png',
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: 'upper abs',
    image: 'body_parts/abs_upper.png',
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: 'lower abs',
    image: 'body_parts/abs_lower.png',
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: 'biceps',
    image: 'body_parts/bicep.png',
    offsetX: -400,
    offsetY: -605,
    opacity: 0.1,
  },
  {
    name: 'tibia',
    image: 'body_parts/calves_front.png',
    offsetX: -365,
    offsetY: 300,
  },
  {
    name: 'chest',
    image: 'body_parts/chest.png',
    offsetX: -400,
    offsetY: -600,
    opacity: 0.1,
  },
  {
    name: 'forearms',
    image: 'body_parts/forearms_front.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'obliques',
    image: 'body_parts/obliques.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'shoulder_front',
    image: 'body_parts/shoulder_front.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'thigh_inner',
    image: 'body_parts/thigh_inner.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'thigh_lower',
    image: 'body_parts/thigh_lower.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'thigh_outer',
    image: 'body_parts/thigh_outer.png',
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: 'thigh',
    image: 'body_parts/thigh.png',
    offsetX: -400,
    offsetY: 500,
  },
];

const backParts = [
  {
    name: 'back_lower',
    image: 'body_parts/back_lower.png',
  },
  {
    name: 'calves',
    image: 'body_parts/calves.png',
  },
  {
    name: 'forearms_back',
    image: 'body_parts/forearms_back.png',
  },
  {
    name: 'glutes',
    image: 'body_parts/glutes.png',
  },
  {
    name: 'hamstring',
    image: 'body_parts/hamstring.png',
  },
  {
    name: 'lats',
    image: 'body_parts/lats.png',
  },
  {
    name: 'neck',
    image: 'body_parts/neck.png',
  },
  {
    name: 'shoulder_back',
    image: 'body_parts/shoulder_back.png',
  },
  {
    name: 'trapezius',
    image: 'body_parts/trapezius.png',
  },
  {
    name: 'triceps',
    image: 'body_parts/triceps.png',
  }
];

    

export default function App() {
  return (
    <div className="body-model">
      <div className="front-parts">
      {frontParts.map((part, index) => (
          <div 
            key={index} 
            className="part" 
            style={{
              position: 'absolute',
              left: `${part.offsetX || 0}px`,
              top: `${part.offsetY || 0}px`
            }}
          >
            <img src={part.image} alt={part.name} style={{ opacity: part.opacity || 0.5 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
