// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BodyModel from "./components/BodyModel/BodyModel";
import Levelup from "./components/Level/Levelup";
import SetupForm from "./components/SetupForm/SetupForm";
import Workout from "./components/Workout/WorkOutInput";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"; // Import the global styles
import { AuthProvider } from "./AuthContext";
import ChatIcon from "./components/ChatIcon/ChatIcon";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* <SignUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        <div className="main-content">
          {/* This will ensure content starts below the navbar */}
          <Routes>
            <Route path="/body-model" element={<BodyModel />} />
            <Route path="/level-up" element={<Levelup />} />
            <Route path="/setup-form" element={<SetupForm />} />
            <Route path="/workout" element={<Workout />} />
          </Routes>
        </div>
        <ChatIcon />
      </Router>
    </AuthProvider>
  );
};

export default App;
