import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Octofit Logo" />
      <Link to="/">Home</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/workouts">Workouts</Link>
    </nav>
  );
}

export default Navbar;
