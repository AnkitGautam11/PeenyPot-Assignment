import React from 'react'
import './carousel.css'
import CarouselSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='carousel-slider'>
      <div className='carousel'>
        <CarouselSlider {...settings}>
        <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
          <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
          <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
          <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
          <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
          <div className="description">
            <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
            <p>File Name*|2 Min Read</p>
            <button>Read Now</button>
          </div>
        </CarouselSlider>
      </div>
    </div>
  )
}

export default Carousel