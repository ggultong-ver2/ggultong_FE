import React, { Component } from "react";
import Slider from "react-slick";
import "./reset.css"
import "./style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Heroside extends Component {
  render() {
    const settings = {
      arrow : true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slide1">
            <h1>
                혼술 / 혼밥하는 당신의 <br /> 특별한 요리를 공유해봐요!
            </h1>
            <button>글쓰기</button>
          </div>
          <div className="slide">
            <h3>second page</h3>
          </div>
          <div className="slide">
            <h3>third page</h3>
          </div>
        </Slider>
      </div>
    );
  }
}