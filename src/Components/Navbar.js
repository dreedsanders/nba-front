import React from 'react'

export const Navbar = () => {
  return (
    <div>
      {/* make all list items a href that goes to a page with the button to load things */}
      <nav className="navbar background">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="nav-item-text">Games</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Schedule</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Stats</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Standings</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Teams</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">News</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Sign In</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
