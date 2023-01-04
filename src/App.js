import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// components
import Navbar from './components/Navbar';

// views
import Home from './views/Home';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F97316',
      darker: '#EA580C',
    },
    secondary: {
      main: '#1E3A8A',
      darker: '#1E40AF',
    },
    neutral: {
      main: '#fff',
      contrastText: '#f1f1f1',
    },
  },
});

function App() {
  // const { theme, setTheme } = React.useContext(ThemeContext);
  // const changeTheme = () => {
  //   console.log(theme);
  //   setTheme(theme === 'light'? 'dark': 'light');
  // };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Button color='primary'></Button>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
