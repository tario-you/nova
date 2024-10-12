// src/App.js
import React from 'react';
import Sidebar from './Sidebar';

const Workout = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <h1>Welcome to the Workout Tracker</h1>
                <p>This is the main content area.</p>
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default Workout;