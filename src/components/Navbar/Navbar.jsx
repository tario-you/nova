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

          <li>
            <NavLink to="/body-model" className="nav-link" activeClassName="active-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/workout" className="nav-link" activeClassName="active-link">
              Workouts
            </NavLink>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
