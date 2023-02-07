import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getMainPost } from "../redux/modules/postSlice";
import "./style.css";
import "../components/heroside/slick-theme.css";
import "../components/heroside/slick.css";

function Recipe() {
  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.details.details.mainPost);
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    dispatch(__getMainPost());
  }, [dispatch]);

  useEffect(() => {
    const array = postList;

    if (postList) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 6; j++) {
          const mainPageList = {
            postId: array[1][j].postId,
            title: array[1][j].title,
            imageUrl: array[1][j].imageUrl,
          };
          setMainList((old) => [...old, mainPageList]);
        }
      }
    }
  }, [postList]);

  return (
    <div className="list_slider">
      <div className="main_recipe">
        <ul className="clearfix">
          <li>
            <h3>
              자취하면서 <br />
              만든 음식 모음
            </h3>
            <h4>빠르고 간단한 자취 음식 레시피</h4>
            <button onClick={() => navigate("mealList/meal")}>
              <h5>글 구경하기</h5> <div className="btn_arrow"></div>
            </button>
          </li>
          <div className="list_slide_container">
            <div className="slide">
              <Slider {...settings}>
                {mainList.map((rowData, index) => (
                  <div
                    className="list_slide"
                    key={index}
                    onClick={() =>
                      navigate(`/mealList/meal/detail/${rowData.postId}`)
                    }
                  >
                    <img
                      src={rowData.imageUrl}
                      alt="image"
                      className="list_slide_image"
                    />
                    <p>{rowData.title}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
