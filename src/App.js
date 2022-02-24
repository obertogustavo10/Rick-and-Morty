import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import './App.css';



function App() {

  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characteres" element={<Personajes/>}/>
      </Routes>
    </BrowserRouter>
    </div>
 
  );
  }

export default App;
