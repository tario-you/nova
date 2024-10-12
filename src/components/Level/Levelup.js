import React, { useState } from 'react';

const LevelUp = () => 
    {
  // State for level, current XP, and required XP
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [requiredXP, setRequiredXP] = useState(100);

  // Function to simulate gaining experience
  const gainXP = (xp) => 
  {
    let newXP = currentXP + xp;

    // Check if gained enough XP to level up
    if (newXP >= requiredXP) 
    {
      levelUp(newXP);
    } 
    else 
    {
      setCurrentXP(newXP); // Just update XP if not leveling up
    }
  };

  // Function to handle leveling up
  const levelUp = (newXP) => 
  {
    let leftoverXP = newXP - requiredXP; // XP left after leveling up

    setLevel(prevLevel => prevLevel + 1); // Increment level

    // Dynamically increase the required XP for the next level
    let newRequiredXP = Math.floor(requiredXP * 1.25); // Example formula to increase XP requirement

    setRequiredXP(newRequiredXP); // Update required XP for the next level
    setCurrentXP(leftoverXP);      // Carry over leftover XP

    console.log(`Congratulations! You've reached level ${level + 1}!`);
  };

  return (
    <div>
      <h1>Level: {level}</h1>
      <p>XP: {currentXP}/{requiredXP}</p>

      {/* Button to simulate gaining XP */}
      <button onClick={() => gainXP(50)}>Gain 50 XP</button>
      <button onClick={() => gainXP(120)}>Gain 120 XP</button>
    </div>
  );
};

export default LevelUp;