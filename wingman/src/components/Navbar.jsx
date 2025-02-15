import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/auto-match">Auto Match</Link></li>
        <li><Link to="/following">Following</Link></li>
        <li><Link to="/followers">Followers</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;