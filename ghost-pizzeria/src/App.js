import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <div className="App">

      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/' />
      </Routes>
    
    </div>
    </BrowserRouter>
   
  );
}

export default App;
