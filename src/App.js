import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/login/AuthPage';
import LandingPage from './pages/all/landing_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Auth_page" element={<AuthPage />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
