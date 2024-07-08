import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
