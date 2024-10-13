// src/LevelContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const LevelContext = createContext();

// Create a provider component
export const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(1);       // State for level
  const [currentXP, setCurrentXP] = useState(0); // State for current experience points
  const [requiredXP, setRequiredXP] = useState(100);

  return (
    <LevelContext.Provider value={{ level, setLevel, currentXP, setCurrentXP, requiredXP, setRequiredXP }}>
      {children}
    </LevelContext.Provider>
  );
};

// Custom hook for using the context
export const useLevel = () => {
  return useContext(LevelContext);
};