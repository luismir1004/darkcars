import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import styles
import '../base.css';
import '../styles.css';
import '../login.css';

// Import page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
