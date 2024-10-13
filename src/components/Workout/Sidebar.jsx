// src/Sidebar.jsx
import React from 'react';
import './Workout.css'; // Import the CSS file for styling
import AddWorkoutForm from './AddWorkoutForm';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Workout Tracker</h2>
            <ul>
                <li>Home</li>
                <li>Add Exercise</li>
                <li>View Workouts</li>
                <li>Settings</li>
                <li>Help</li>
            </ul>
        </div>
    );
};

export default Sidebar;