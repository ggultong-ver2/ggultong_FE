import React, { Component } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "../../pages/reset.css"
import "./style.css";
import "./slick-theme.css";
import "./slick.css";

// export default class Heroside extends Component
function Heroside() {
  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const navigate = useNavigate();

  return (
    <div className="heroside_slider">
      <Slider {...settings}>
        <div className="slide1">
          <div className="slide1">
            <div className="heroside_text">
              <h1>
                쉽고 빠르게 <br /> 집에서 만드는 볶음면
              </h1>
              <p>
                자취할 때 매번 배달만 시키게 되는 너를 위해 <br /> 인도식 볶음면
                맛있게 만들기
              </p>
            </div>
            <div className="heroside_1"></div>
          </div>
        </div>
        <div className="slide2">
          <h1>
            혼술 / 혼밥하는 당신의 <br /> 특별한 요리를 공유해봐요!
          </h1>
          <button onClick={() => navigate("/post")}>글쓰기</button>
        </div>
        <div className="slide3">
          <div className="slide3">
            <div className="heroside_text">
              <h1>
                자취생 필수! <br /> 식재료 올바른 보관법
              </h1>
              <p>
                장 보고 나서 재료들 어떻게 보관하지? <br /> 헷갈렸던 채소 보관법
                다 정리해줄게
              </p>
            </div>
            <div className="heroside_3"></div>
          </div>
        </div>
        <div className="slide4">
          <div className="slide4">
            <div className="heroside_text">
              <h1>
                퇴근 후 먹으면 좋을 <br /> 와인 추천 10가지
              </h1>
              <p>
                와인 초보들 다 들어와! 어려웠던 용어 정리해줄게 <br /> 혼자 먹기
                좋은 와인을 알아보자!
              </p>
            </div>
            <div className="heroside_4"></div>
          </div>
        </div>
        <div className="slide5">
          <div className="slide5">
            <div className="heroside_text">
              <h1>
                꿀통 음식 월드컵 <br /> 이번 달 우승 음식은?
              </h1>
              <button
                className="slide5_ranking"
                onClick={() => navigate("/gamelist/worldcupgame/gamerankview")}
              >
                랭킹보기
              </button>
              <button
                className="slide5_start"
                onClick={() => navigate("/gamelist/worldcupgame")}
              >
                시작하기
              </button>
            </div>
            <div className="heroside_5"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Heroside;
