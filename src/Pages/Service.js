import React from 'react'
import { Link } from "react-router-dom";

import CalcModal from '../Components/CalcModal';
import SignIn from '../Components/SignIn';
import './Service.css';

function Service() {
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
        <div className='header'>
          <h2>Our Services</h2>
          <h1 style={{color:'#000', fontWeight:'bold',fontFamily:'sans-source-pro'}}>Experience the benefits of outsourcing your product and <br/> 
            &nbsp; &nbsp; &nbsp; &nbsp; platform development to our team of experts</h1>
          <p>Established in the year 2001, it is committed towards providing quality solutions in IT consulting and software development with high value services and product<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;offerings. It provides a strong blend of quality, experience, research and development and is supported by an extremely competent team.</p>
        </div>
        <div className='float-container1'>
          <div className='float-child1'>
          <div className='service-container'>
            <img height='50%' width='100%' src='https://staging.entiovi.com/wp-content/uploads/2023/09/2.png'/>
            <h4><b>Product Development</b></h4>
            <Link to='/productdev' style={{textDecoration:'none'}}>As a software company, one of our primary areas of expertise is in developing software products for our clients...</Link>
          </div>

          </div>
          
          <div className='float-child1'>
          <div className='service-container'>
           <img height='50%' width='100%' src='https://staging.entiovi.com/wp-content/uploads/2023/09/Logistics.png'/>
           <h4><b>Offshore Delivery Services</b></h4>
           <Link to='/offshore' style={{textDecoration:'none'}}>We provide managed offshore delivery centres (ODC) from our India offices to provide Software development...</Link>
          </div>

          </div>
          <div className='float-child1'>
          <div className='service-container'>
            <img height='50%' width='100%' src='https://staging.entiovi.com/wp-content/uploads/2023/09/1-1.png'/>
            <h4><b>Staff Augmentation Services</b></h4>
            <Link to='/staffAug' style={{textDecoration:'none'}}>It is a technology solution & services provider with special focus on staff augmentation for product companies...</Link>
          </div>

          </div>
        </div>        



        <footer>
            <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
        </footer>
        
    
    </>
  )
}

export default Service
