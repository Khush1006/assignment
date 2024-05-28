// Navbar.js
import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ themeMode, toggleTheme }) => {
  // Define styles for navbar based on theme mode
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '8px',
    background: themeMode === 'dark' ? '#333' : '#f0f0f0',
    color: themeMode === 'dark' ? '#f0f0f0' : '#333', 
  };

  return (
    <div style={navbarStyle}>
      <ToggleButtonGroup value={themeMode} exclusive onChange={toggleTheme}>
        <ToggleButton value="light" aria-label="Light mode">
          <Brightness7Icon />
        </ToggleButton>
        <ToggleButton value="dark" aria-label="Dark mode">
          <Brightness4Icon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Navbar;
