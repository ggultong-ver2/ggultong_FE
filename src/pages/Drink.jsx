import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getMainPost } from "../redux/modules/postSlice";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Drink() {
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
        for (let j = 0; j < i * 2; j++) {
          const mainPageList = {
            postId: array[0][j].postId,
            title: array[0][j].title,
            imageUrl: array[0][j].imageUrl,
          };

          setMainList((old) => [...old, mainPageList]);
        }
      }
    }
  }, [postList]);

  return (
    <div className="list_slider">
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
          <div className="list_slide_container">
            <div className="slide">
              <Slider {...settings}>
                {mainList.map((rowData) => (
                  <div className="slide_wrap">
                    <div
                      className="list_slide"
                      key={`{drink-rowData}`}
                      onClick={() =>
                        navigate(`/drinkList/drink/detail/${rowData.postId}`)
                      }
                    >
                      <img
                        src={rowData.imageUrl}
                        alt="image"
                        className="list_slide_image"
                      />
                      <p>{rowData.title}</p>
                    </div>
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

export default Drink;
