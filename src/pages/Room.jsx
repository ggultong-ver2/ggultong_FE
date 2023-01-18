import "../pages/reset.css";
import "../pages/style.css";

function Room() {
  return (
    <>
      <div className="main_room">
        <ul className="clearfix">
          <li>
            <h3>
              너도 혼술하니? <br />
              나도 혼술해!
            </h3>

            <h4>더 이상 혼자 고민하지마! <br /> 자취방 구하거나 내놓을 수 있어요.</h4>
            <button><h5>글 구경하기</h5> <div className="btn_arrow"></div></button>

          </li>
          <li>
            <div className="room_image"></div>
            <p>신촌 여름 방학 동안 방 뺄건데 살 사람?! 같은 학교면 싸게 해줌</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>삼성동 근처 투룸 구합니다!</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>이사하기 전 자취방 구조 3D 돌려봄 이정도면 ㄱㅊ?</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Room;
