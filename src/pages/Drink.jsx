import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "../components/heroside/slick-theme.css";
import "../components/heroside/slick.css";
import { useSelector, useDispatch } from "react-redux";
import { __getMainPost } from "../redux/modules/postSlice";

function Drink({rowData}) {
  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[mainDrink, setMainDrink] =useState([])

  const mainDrinkList = useSelector((state) => state.details.details.mainPost);
  console.log("mainDrinkList", mainDrinkList)

  useEffect(() => {
    dispatch(__getMainPost());
    console.log("res", mainDrinkList[0])
  }, [dispatch]);

  const toDrinkList = (post) => {
    navigate(`/drinkList/drink/detail/${post.id}`)
  }

  return (
    <div className="drink_slider">
      <div className="main_drink">
        <ul className="clearfix">
          <li>
            <h3>
              너도 혼술하니? <br />
              나도 혼술해!
            </h3>
            <h4>
              자취생의 필수 코스! <br /> 혼술할 때 꿀팁 다 알려줄게 드루와
            </h4>
            <button onClick={() => navigate("drinkList/drink")}>
              <h5>글 구경하기</h5> <div className="btn_arrow"></div>
            </button>
          </li>
          <div className="drink_slide_container">
            <Slider {...settings}>
              {mainDrink?.map((rowData, id) => {
                console.log("row", rowData);
                <div
                  className="drink_slide"
                  key={rowData.id}
                  onClick={toDrinkList}
                >
                  <img src={rowData.imageUrl} alt="image" />
                  <p>{rowData.title}</p>
                </div>;
              })}
            </Slider>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drink;
