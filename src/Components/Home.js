import React from 'react'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalcModal from './CalcModal';

import Banner from './Banner';
import Button from 'react-bootstrap/Button';
import image1 from '../Components/airport1.png';
import image2 from '../Components/airport2.png';
import image3 from '../Components/airport3.png';
import image4 from '../Components/marker.png';

import {Link} from 'react-router-dom';

function Menu() {
    return (
        <>
            <nav className='main-nav'>
                <h1>My Webpage</h1>
                <div className='menu-link mobile-menu-link'>
                    <ul className='ul'>
                        <li><Link to='/home' className='a' href='#'>Home</Link></li>
                        <li><Link to='/about' className='a'>About</Link></li>
                        <li><Link to='/services' className='a'>Services</Link></li>
                        <li><CalcModal/></li>
                    </ul>
                </div>
            </nav>

            <div className='scroll'>
      
      <div><Banner/></div>

      <div className="float-container">

        <div className="float-child">
          <div className='location-container'>
            <img src={image4}/>
            <h3><b>Airport Locations</b></h3>
          </div>
          <div className='text-container'>
            <h5><b>Chhatrapati Shivaji International Airport:</b></h5>
            <p className='location-text'>Mumbai International Airport Ltd,<br/>
              1st Floor, Terminal 1, Santacruz East,Mumbai - 400099, India.</p><br/>

            <h5><b>Indira Gandhi International Airport:</b></h5>
            <p className='location-text'>No.367, Badam Singh Market NH-8,<br/>
               near shiv murti, Rangpuri,New Delhi, Delhi 110037</p><br/>

            <h5><b>Chandigarh International Airport:</b></h5>
            <p className='location-text'>New Civil Air Terminal Chandigarh International Airport,<br/>
              Sahibzada Ajit Singh Nagar, Punjab 140306</p>

            
          </div>
        </div>
        
        <div className="float-child">
          <div className='image-container'>
          <h2>Send us a Message and Learn More About Our Services</h2>
          <form className='form' >
              <div className="row">
                <div className="col">
                  <div className="form-group" >
                    <label htmlFor="name">Name:</label>
                      <input type="text" className="form-control" placeholder='Enter your name' name='name' />
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="name">Email:</label>
                      <input type="text" className="form-control" placeholder='Enter your email' name='email' />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Message:</label>
                  <textarea type="text" className="form-control" rows='5' placeholder='Enter your message' name='your message' style={{height:"150px"}}></textarea>
              </div>
                </form> 
                <div className='button1'>
                  
                  <Button variant="primary" >Send Message</Button>
                </div>
            
          </div>
        </div>
  
      </div>
      <div>
        <img className='img' src={image1}/>
        <img className='img' src={image2}/>
        <img className='img' src={image3}/>
      </div>
    </div>

            <footer>
                <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
            </footer>
       
        </>
    )
}

export default Menu;