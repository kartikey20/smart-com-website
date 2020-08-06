import React from "react";
import Carousel from "react-bootstrap/Carousel";
const PictureCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block h-50 w-100"
            src={require('../../Images/photo-slide1.jpeg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Smart Com 2020</h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-50 w-100"
            src={require('../../Images/photo-slide3.jpeg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Images/photo-slide4.jpeg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default PictureCarousel;
