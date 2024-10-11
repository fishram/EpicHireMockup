import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoDark from "../assets//logos/logo-dark.svg"

export default function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

    return (
        <div className="nav-bar">
            <div className="nav--left">
                <img className="nav--logo" 
                    src={logoDark}
                    alt="Epic Hire logo"
                    />
            </div>
            <div className="nav--right">
                    <button
                        className="toggle-button"
                        onClick={handleToggle}
                        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {isDarkMode ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </div>
    )
}