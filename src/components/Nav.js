import React from 'react';
import { NavLink } from 'react-router-dom';
import applogo from '../images/planet.png';
import './nav.css';

function Nav() {
  return (
    <div className="header">
      <div className="logo">
        <img src={applogo} alt="space logo" width="38" height="38" />
        <h2>Space Travelers Hub</h2>
      </div>
      <nav>
        <li key={1}><NavLink to="/"> Rockets</NavLink></li>
        <li key={2}><NavLink to="/Dragons"> Dragons</NavLink></li>
        <li key={3}><NavLink to="/Missions"> Missions</NavLink></li>
        <li key={4}><NavLink to="/Profile"> Profile</NavLink></li>
      </nav>
    </div>
  );
}

export default Nav;
