// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="img-container">
        <img src="/LevelUpLogo.png" alt="logo" className="img"></img>
      </div>

      <div className="links-container">
        <ul className="nav-links">

          <hr className="hr"></hr>
          <li>
            <NavLink to="/body-model" className="nav-link" activeClassName="active-link">
              <img src="/icons/home.png" alt="Home Icon" className="icon" /> Home
            </NavLink>
          </li>
          <hr className="hr"></hr>
          <li>
            <NavLink to="/workout" className="nav-link" activeClassName="active-link">
              <img src="/icons/dumbbell.png" alt="Workout Icon" className="icon" /> Workouts
            </NavLink>
          </li>
          <hr className="hr"></hr>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
