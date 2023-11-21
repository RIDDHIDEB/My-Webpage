import React from 'react';
import { Link } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import CalcModal from '../Components/CalcModal';
import './ProductDev.css';

function ProductDev() {

  const pData = [0, 0, 0, 0, 0];
  const uData = [70, 40, 33, 57, 65];
  const xLabels = [
    'Product A',
    'Product B',
    'Product C',
    'Product D',
    'Product E',
];
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

        <div className='scroll'>
          <div className='productdev-body'>
            <div className='productdev-float-child'>
              <BarChart
                width={600}
                height={400}
                series={[
                  { data: pData,  id: 'pvId' },
                  { data: uData,  id: 'uvId' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
              />
            </div>
            <div className='productdev-float-child1'>
              <h3 style={{color:"#20A0D8"}}>Services - Product Development</h3>
              <p><b>Experience the benefits of outsourcing your software product<br/> development to our team of experts.</b><br/><br/>
                End-to-end software product development services - from ideation to<br/> implementation and maintenance<br/><br/>
                As a software company, one of our primary areas of expertise is in developing software products for our clients. Our software product development team specializes in providing end-to-end product development services, from ideation to implementation and maintenance. We work with our clients to understand their requirements and help them develop software products that meet their specific needs. Our team consists of experienced developers, project managers, and quality assurance experts who work together to deliver high-quality software products.<br/><br/>
                <b>Agile methodology to ensure iterative and collaborative product development</b><br/><br/>
                Our software product development process starts with ideation and research, where we work with our clients to understand their needs and requirements. We then develop a product roadmap and create a prototype to validate the product idea. Our team follows an agile methodology to ensure that the product is developed in an iterative and collaborative way, with continuous feedback and improvement.
              </p>
            </div>
          </div>
        </div>

        <footer>
            <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
        </footer>
    </>
  )
}

export default ProductDev;
