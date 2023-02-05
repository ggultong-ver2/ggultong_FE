import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getMainPost } from "../redux/modules/postSlice";
import "./style.css";
import "../components/heroside/slick-theme.css";
import "../components/heroside/slick.css";

function Recycle() {
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
            postId: array[2][j].postId,
            title: array[2][j].title,
            imageUrl: array[2][j].imageUrl,
          };
          setMainList((old) => [...old, mainPageList]);
        }
      }
    }
  }, [postList]);

  return (
    <div className="list_slider">
      <div className="main_recycle">
        <ul className="clearfix">
          <li>
            <h3>
              배달음식 남을 때 <br />
              활용 방법
            </h3>
            <h4>
              남은 음식 버리지 말고, 재활용 해먹자! <br /> 배달 음식보다 맛있는
              활용 음식
            </h4>
            <button onClick={() => navigate("recycleList/recycle")}>
              <h5>글 구경하기</h5> <div className="btn_arrow"></div>
            </button>
          </li>
          <div className="list_slide_container">
            <div className="slide">
              <Slider {...settings}>
                {mainList.map((rowData) => (
                  <div
                    className="list_slide"
                    key={`{recycle-rowData}`}
                    onClick={() => navigate(`/recycleList/recycle/detail/${rowData.postId}`)}
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

export default Recycle;
