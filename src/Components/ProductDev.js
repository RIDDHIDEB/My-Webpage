import React from 'react';
import { Link } from "react-router-dom";
import CalcModal from '../Components/CalcModal';
import './ProductDev.css';

function ProductDev() {
  return (
    <>
      <nav className="main-nav">
            <h1>Services</h1>
            <div className='menu-link mobile-menu-link'>
                    <ul className='ul'>
                        <li><Link to='/home' className='a' href='#'>Home</Link></li>
                        <li><Link to='/about' className='a'>About</Link></li>
                        <li><CalcModal/></li>
                    </ul>
                </div>
        </nav>
        <div className='productdev-heading'>
            <h1>Product Development</h1>
        </div>
        <footer>
            <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
        </footer>
    </>
  )
}

export default ProductDev;
