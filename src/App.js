import React from 'react'
import Home from './Components/Home';
import './App.css';

import Login from './Components/Login';
import About from './Pages/About';
import Service from './Pages/Service';
import ProductDev from './Components/ProductDev';
import Offshore from './Components/Offshore';
import StaffAug from './Components/StaffAug';
import SignUp from './Components/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/productdev' element={<ProductDev/>}/>
        <Route path='/offshore' element={<Offshore/>}/>
        <Route path='/staffAug' element={<StaffAug/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
