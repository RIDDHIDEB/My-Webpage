import React from 'react';
import { Link } from "react-router-dom";
import CalcModal from '../Components/CalcModal';
import './Offshore.css';

function Offshore() {
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

        <div className='offshore-heading'>
            <h1>Offshore Delivery Services</h1>
        </div>

        <footer>
            <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
        </footer>
    </>
  )
}

export default Offshore
