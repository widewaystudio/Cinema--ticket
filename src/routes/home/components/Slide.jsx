import React from 'react';
import PropTypes from "prop-types";
import Slider from 'react-slick';
import "./Slide.css";

const PosterSlide = ({ data }) => {
  const setting = {
    dots: true,
    autoplay: true,
    className: "posterSlide",
    dotsClass: "posterSlide__dots"
  };

  return (
    <Slider {...setting}>
      {
        data.map(item =>(
          <div key={item.image}>
            <img className="posterSlide__image" src={item.image} alt=""/>
          </div>
        ))
      }

    </Slider>

  );
};

PosterSlide.propTypes = {
  data: PropTypes.array.isRequired,
}
export default PosterSlide;
