import React from 'react'
import Home from './Components/Home';
import './App.css';

import Login from './Components/Login';
import About from './Pages/About';
import Service from './Pages/Service';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        
      </Routes>
      
    </Router>
  );
}

export default App;
