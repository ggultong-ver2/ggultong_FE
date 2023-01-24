import { useNavigate } from "react-router-dom";
import "../pages/reset.css";
import "../pages/style.css";

function Recycle() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main_recycle">
        <ul className="clearfix">
          <li>
            <h3>
              배달음식 남을 때 <br />
              활용 방법
            </h3>

            <h4>
              남은 음식 버리지 말고, 재활용해먹자! <br /> 배달음식보다 맛있는
              활용음식
            </h4>
            <button onClick={() => navigate("recycleList/recycle")}>
              <h5>글 구경하기</h5> <div className="btn_arrow"></div>
            </button>
          </li>
          <li>
            <div className="recycle_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="recycle_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="recycle_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Recycle;
