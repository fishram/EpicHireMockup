import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoDark from "../assets/logos/logo-dark.svg";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State Management

  const handleToggle = () => { // Event Handling
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => { // Apply styling to all elements when isDarkMode state changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="nav-bar">
      <div className="nav--left">
        <img
          className="nav--logo" 
          src={logoDark}
          alt="Epic Hire logo"
        />
      </div>
      <div className="nav--right">
        <button
          className="toggle-button"
          onClick={handleToggle}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
}
