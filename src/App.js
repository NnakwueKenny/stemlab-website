import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// components
import Navbar from './components/Navbar';

// views
import Home from './views/Home';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import Gallery from './views/Gallery';
import Contact from './views/Contact';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme({
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
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  }))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Button color='primary'></Button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
