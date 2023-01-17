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
            <div>
              더 이상 혼자 고민하지마!
              <br />
              구하거나 내놓을 수 있어요.
            </div>
            <div className="write_wrap">
              <button>글 구경하기</button>
              <img src="https://cdn.discordapp.com/attachments/1047386886269829182/1064616579448459265/Group_212.png"></img>
            </div>
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
