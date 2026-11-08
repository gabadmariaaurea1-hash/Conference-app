import React from 'react';

export default function Navbar({ onShowDetails, scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">Conference Expense Planner</div>
      <div className="navbar-links">
        <button onClick={() => scrollToSection('venue-section')}>Venue</button>
        <button onClick={() => scrollToSection('addons-section')}>Add-ons</button>
        <button onClick={() => scrollToSection('meals-section')}>Meals</button>
      </div>
      <button className="show-details-btn" onClick={onShowDetails}>
        Show Details
      </button>
    </nav>
  );
}