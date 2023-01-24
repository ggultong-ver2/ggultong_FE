import { useNavigate } from "react-router-dom";
import "../pages/reset.css";
import "../pages/style.css";

function Drink() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main_room">
        <ul className="clearfix">
          <li>
            <h3>
              너도 혼술하니? <br />
              나도 혼술해!
            </h3>

            <h4>자취생의 필수 코스! <br /> 혼술할 때 꿀팁 다 알려줄게 드루와</h4>
            <button onClick={() => navigate("drinkList/drink")}><h5>글 구경하기</h5> <div className="btn_arrow"></div></button>

          </li>
          <li>
            <div className="room_image"></div>
            <p>칵테일을 위한 술의 종류 그리고 홈바를 위한 술 추천</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>와인이랑 잘 어울리는 음식은 이거지</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>연말 파티를 안가는 당신에게. 누구보다 맛있게 술 마시는 방법</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Drink;
