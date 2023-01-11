import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPost } from "../redux/modules/postSlice";
import Magazine from "./Magazine";
import QNA from "./QNA";
import Recipe from "./Recipe";
import "./reset.css";
import Room from "./Room";
import "./style.css";

function Main(props) {
  const selectedCategory = props.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const post = useSelector((state) => state.post.posts.list);
  // useEffect(() => {
  //   dispatch(__getPost(selectedCategory));
  // }, [selectedCategory, dispatch]);
  console.log(selectedCategory);

  return (
    <>
      <div className="hero_side">
        <h1>
          자취하면서 궁금했던 점을 <br /> 공유해봐요!
        </h1>
        <button onClick={()=>("/post")}>글쓰기</button>
      </div>
      <div className="main_container">
        <div className="main_category">
          <ul className="clearfix">
            <li>
              <div className="category_text">
                <h3>꿀매거진</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀방</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀팁</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀밥</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀템</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
          </ul>
        </div>
        <Magazine />
        <Room />
        <Recipe />
        <QNA />
      </div>
    </>
  );
}

export default Main;
