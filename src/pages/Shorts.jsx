import React, { Component } from "react";
import Slider from "react-slick";
import "./reset.css"
import "./style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Shorts extends Component {
  render() {
    const settings = {
      arrow : true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="shorts_slider">
        <h2>자취 간단 레시피</h2>
        <Slider {...settings}>
          <li>
              <div className="shorts_slide">
                <h3>shorts1</h3>
              </div>
          </li>
          <li>
              <div className="shorts_slide">
                <h3>shorts2</h3>
              </div>
          </li>
          <li>
              <div className="shorts_slide">
                <h3>shorts3</h3>
              </div>
          </li>
          <li>
              <div className="shorts_slide">
                <h3>shorts4</h3>
              </div>
          </li>
        </Slider>
      </div>
    );
  }
}