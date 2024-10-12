// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyModel from './components/BodyModel/BodyModel';
import Levelup from './components/Level/Levelup';
import SetupForm from './components/SetupForm/SetupForm';
import Workout from './components/Worksouts/WorkOutInput';
import Navbar from './components/Navbar/Navbar';
import './App.css'; // Import the global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content"> {/* This will ensure content starts below the navbar */}
        <Routes>
          <Route path="/body-model" element={<BodyModel />} />
          <Route path="/level-up" element={<Levelup />} />
          <Route path="/setup-form" element={<SetupForm />} />
          <Route path="/workouts" element={<Workout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
