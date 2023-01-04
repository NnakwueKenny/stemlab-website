import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import ThemeContext from "./utils/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return(
    <React.StrictMode>
      <ThemeContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ThemeContext>
    </React.StrictMode>
  )
}

root.render(
  <Index />
);