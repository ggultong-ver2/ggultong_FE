import { useNavigate } from "react-router-dom";
import { __getPost } from "../redux/modules/postSlice";
import Heroside from "../components/heroside/Heroside";
import Recipe from "./Recipe";
import "./reset.css";
import Drink from "./Drink";
import "./style.css";
import WorldCup from "./WorldCup";
import Recycle from "./Recycle";
import Swal from "sweetalert2";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Heroside />
      <div className="main_container">
        <div className="sub_container">
          <div className="main_category">
            <ul className="clearfix">
              <li onClick={() => navigate("/drinkList/drink")}>
                <div className="category_title">
                  <h3>혼술 꿀팁</h3>
                  <div className="drink_icon"></div>
                </div>
                <div className="category_text">
                  <p>혼술하는 사람들의 팁이 궁금하다면?</p>
                </div>
              </li>
              <li onClick={() => navigate("/mealList/meal")}>
                <div className="category_title">
                  <h3>혼밥 꿀팁</h3>
                  <div className="rice_icon"></div>
                </div>
                <div className="category_text">
                  <p>혼밥하는 사람들의 요리 레시피가 궁금하다면?</p>
                </div>
              </li>
              <li onClick={() => navigate("/recycleList/recycle")}>
                <div className="category_title">
                  <h3>푸드 리사이꿀</h3>
                  <div className="tip_icon"></div>
                </div>
                <div className="category_text">
                  <p>남은 음식 활용 및 재료 보관법이 궁금하다면?</p>
                </div>
              </li>
            </ul>
          </div>
          <Drink />
          <Recipe />
          <Recycle />
          <div className="random_recipe_container">
            <div className="random_recipe">
              <div className="random text">
                <h3>
                  오늘 뭐 먹지? <br /> 고민될 땐 꿀통이 골라줄게!
                </h3>
                <button
                  onClick={() => {
                    Swal.fire(
                      "현재 구현중입니다",
                      "조금만 더 기다려주세요~",
                      "warning"
                    );
                  }}
                >
                  도와줘요 꿀통대장
                </button>
              </div>
              <div className="random_image"></div>
            </div>
          </div>
          {/* <WorldCup /> */}
        </div>
      </div>
    </>
  );
}

export default Main;
