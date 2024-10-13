import React from "react";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  import Slider from 'react-slick'
const GameSlider: React.FC = () => {
  return (
    <Slider {...settings}>
    <div>
      <h3>SLIDE 1</h3>
    </div>
    <div>
      <h3>SLIDE 2</h3>
    </div>
    <div>
      <h3>SLIDE 3</h3>
    </div>
    <div>
      <h3>SLIDE 4</h3>
    </div>
    <div>
      <h3>SLIDE 5</h3>
    </div>
    <div>
      <h3>SLIDE 6</h3>
    </div>
  </Slider>
  );
};

export default GameSlider;
