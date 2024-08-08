import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';
import CardsMenu from './components/cardsMenu/CardsMenu';
import FilterItem from './components/filterItem/FilterItem';
import { menu } from './data/Data';
import Events from './components/events/Events';
import About from './components/pages/about/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<FilterItem list={menu} />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
  
          <Footer />
          
      </div>
    </BrowserRouter>
    
  );
}

export default App;
