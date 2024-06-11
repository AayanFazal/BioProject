// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Energy from './pages/Home';
import Unit1 from './pages/Unit1';
import Unit2 from './pages/Unit2';
import Unit3 from './pages/Unit3';
import Unit4 from './pages/Unit4';
import Unit5 from './pages/Unit5';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route path="/unit1" element={<Unit1 />} />
        <Route path="/unit2" element={<Unit2 />} />
        <Route path="/unit3" element={<Unit3 />} />
        <Route path="/unit4" element={<Unit4 />} />
        <Route path="/unit5" element={<Unit5 />} />
      </Routes>
    </Router>
  );
};

export default App;
