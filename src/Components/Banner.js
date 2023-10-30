import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-container'>
      <Carousel.Item className='carousel-item'>
        <img src='https://staging.entiovi.com/wp-content/themes/entiovi/assets/images/sliders/Banner-1.jpg' />
        <Carousel.Caption>
          <h3>Enabling Digital Transformations</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://staging.entiovi.com/wp-content/themes/entiovi/assets/images/sliders/Banner-3.webp' />
        <Carousel.Caption>
          <h3>Leveraging Our Enterprise Platforms</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://staging.entiovi.com/wp-content/themes/entiovi/assets/images/sliders/Banner-2.jpg' />
        <Carousel.Caption>
          <h3>Ideating Innovations</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;