import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './ImageSlider.css';

class ImageSlider extends Component {

  state = {
    index: 1

  }
  changeIndex = index => {
    this.setState({
      index : index + 1
    });
  }
  render() {
  const setting = {
    className: 'imageSlider__content',
    afterChange: this.changeIndex

  }
    return (
      <div className="imageSlider" onClick={this.props.onClose}>
        <div className="imageSlider__index">
          {this.state.index } / 6
        </div>
        <Slider {...setting}>
          <div className="imageSlider__item">
           <img className="imageSlider__img" src="/source/image/asset1.jpeg" alt="" />
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset2.jpeg" alt="" />
          </div>

        </Slider>

      </div>
    );
  }
}

ImageSlider.propTypes = {
  onClose:PropTypes.func.isRequired
};

export default ImageSlider;
