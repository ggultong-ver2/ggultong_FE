import "../pages/reset.css";
import "../pages/style.css";

function Recipe() {
  return (
    <>
      <div className="main_recipe">
        <ul className="clearfix">
          <li>
            <h3>
              간단하게 할 수 있는 <br />
              요리 레시피 추천!
            </h3>

            <h4>더 이상 혼자 고민하지마! <br /> 자취방 구하거나 내놓을 수 있어요.</h4>
            <button><h5>글 구경하기</h5> <div className="btn_arrow"></div></button>

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
