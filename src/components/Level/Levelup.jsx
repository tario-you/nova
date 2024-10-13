import React from 'react';
import { useLevel } from './LevelContext.jsx';
// Function component
const LevelUp = () => {
  // State for level, current XP, and required XP
  const {level, setLevel, currentXP, setCurrentXP, requiredXP, setRequiredXP} = useLevel();

  // Function to simulate gaining experience
  const gainXP = (xp) => {
    let newXP = currentXP + xp;

    // Check if gained enough XP to level up
    if (newXP >= requiredXP) {
      levelUp(newXP);
    } else {
      setCurrentXP(newXP); // Just update XP if not leveling up
    }
  };

  // Function to handle leveling up
  const levelUp = (newXP) => {
    let leftoverXP = newXP - requiredXP; // XP left after leveling up
    let prevLevel = level;
    setLevel(prevLevel + 1); // Increment level

    // Dynamically increase the required XP for the next level
    let newRequiredXP = Math.floor(requiredXP * 1.5); // Example formula to increase XP requirement

    setRequiredXP(newRequiredXP); // Update required XP for the next level
    setCurrentXP(leftoverXP);      // Carry over leftover XP

    console.log(`Congratulations! You've reached level ${level + 1}!`);
  };

  return (
    <div>
      <h1>Level: {level}</h1>
      <h2>Current XP: {currentXP}</h2>
      <h2>Required XP for Next Level: {requiredXP}</h2>
      <button onClick={() => gainXP(50)}>Gain 50 XP</button>
    </div>
  );
};

// Export the gainXP function
export default LevelUp; // Default export for the component