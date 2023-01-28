import React, { Component } from "react";
import Slider from "react-slick";
import "./reset.css";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Shorts extends Component {
  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    return (
      <div className="shorts_slider">
        <h2>자취 간단 레시피</h2>
        <Slider {...settings}>
          <li>
            <div className="shorts_slide"></div>
            <p>
              보기 좋은 자취생 손님 맞이 요리 <br /> 밀푀유나베
            </p>
          </li>
          <li>
            <div className="shorts_slide"></div>
            <p>shorts2</p>
          </li>
          <li>
            <div className="shorts_slide"></div>
            <p>shorts3</p>
          </li>
          <li>
            <div className="shorts_slide"></div>
            <p>shorts4</p>
          </li>
          <li>
            <div className="shorts_slide"></div>
            <p>shorts5</p>
          </li>
          <li>
            <div className="shorts_slide"></div>
            <p>shorts6</p>
          </li>
        </Slider>
      </div>
    );
  }
}
