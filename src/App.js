// App.js
import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import EmployeeData from './components/EmployeeData';
import Navbar from './components/Navbar';

const App = () => {
  const [themeMode, setThemeMode] = useState('dark');

  const toggleTheme = (event, newMode) => {
    if (newMode !== null) {
      setThemeMode(newMode);
    }
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
        <Navbar themeMode={themeMode} toggleTheme={toggleTheme} />
        <EmployeeData />
      </Box>
    </ThemeProvider>
  );
};

export default App;
