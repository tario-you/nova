import React from 'react';

import './BodyModel.css'; // This pulls the CSS file into your app

const frontParts = [
  {
    name: 'chest',
    image: 'body_parrts/chest.png',
  },
];

export default function App() {
  return (
    <div className="body-model">
      <div className="front-parts">
        {frontParts.map((part, index) => (
          <div key={index} className="part">
            <img src={part.image} alt={part.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
