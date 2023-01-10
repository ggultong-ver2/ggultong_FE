import "../pages/reset.css";
import "../pages/style.css";

function Room() {
  return (
    <>
      <div className="main_room">
        <ul className="clearfix">
          <li>
            <h3>
              지금 자취방을 <br />
              구하고 있다면?
            </h3>
            <button>글 구경하기</button>
          </li>
          <li>
            <div className="room_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
          <li>
            <div className="room_image"></div>
            <p>벌레가 나왔을 때 퇴치법 A to Z</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Room;