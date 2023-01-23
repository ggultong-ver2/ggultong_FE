import { useNavigate } from "react-router-dom";
import "../pages/reset.css";
import "../pages/style.css";

function Recipe() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main_recipe">
        <ul className="clearfix">
          <li>
            <h3>
              자취하면서 <br />
              만든 음식 모음
            </h3>

            <h4>빠르고 간단한 자취 음식 레시피</h4>
            <button onClick={() => navigate("mealList/meal")}><h5>글 구경하기</h5> <div className="btn_arrow"></div></button>

          </li>
          <li>
            <div className="recipe_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="recipe_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="recipe_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Recipe;
