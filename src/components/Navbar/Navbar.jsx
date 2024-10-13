// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-links">
        <li>
          <NavLink to="/body-model" className="nav-link" activeClassName="active-link">
            Body Model
          </NavLink>
        </li>
        <li>
          <NavLink to="/level-up" className="nav-link" activeClassName="active-link">
            Level Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/setup-form" className="nav-link" activeClassName="active-link">
            Setup Form
          </NavLink>
        </li>
        <li>
<<<<<<< HEAD
          <NavLink to="/worksout" className="nav-link" activeClassName="active-link">
=======
          <NavLink to="/workout" className="nav-link" activeClassName="active-link">
>>>>>>> e5a335a8dcd3f4c203106f4f29492457f8b2885a
            Workouts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
