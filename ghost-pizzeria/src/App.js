import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer />
        
    </div>
  );
}

export default App;
