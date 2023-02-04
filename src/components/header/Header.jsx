import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "../../pages/reset.css";
import { __getNotification } from "../../redux/modules/notificationSlice";
import NotificationList from "../notification/NotificationList";
import "./style.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [keyword, setKeyWord] = useState("");
  const onSubmit = async () => {
    window.location.href = "/search/" + keyword;
  };

  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  //   console.log("open")
  // };

  const getNotification = () => {
    dispatch(__getNotification());
    console.log("열림");
    setOpen(!open);
  };

  return (
    <div className="header_container">
      <div className="headerwrap">
        <div className="header_left">
          <div className="logo">
            <a href="/">LOGO</a>
          </div>
          <div className="search">
            <input
              type="text"
              id="keyword"
              placeholder="궁금한 자취 정보를 입력하세요"
              className="searchinp"
              onChange={(e) => {
                setKeyWord(e.target.value);
              }}
            />
            <button
              type="button"
              className="search_button"
              onClick={() => {
                onSubmit();
              }}
            />
          </div>
        </div>
        <nav className="gnb">
          <ul className="clearfix">
            <li className="search"></li>
            <li onClick={getNotification} className="alarm">
              알림
            </li>
            {open ? (
              // <ul className="alarm_menu">
              //   <li>읽지 않은 알림 (1)</li>
              //   <li className="menu_item">
              //     lidiee 님이 '김찌 레시피' 게시글에 댓글을 달았습니다.
              //   </li>
              //   <li className="menu_item">
              //     lidiee 님이 '김찌 레시피' 게시글에 댓글을 달았습니다.
              //   </li>
              // </ul>
              <div className="notification_centre">
                <NotificationList />
              </div>
            ) : null}
            <li
              onClick={(res) => {
                console.log(res.headers);
                if (
                  localStorage.getItem("Access_Token", res.headers) !== null
                ) {
                  navigate("/mypage");
                } else {
                  Swal.fire(
                    "로그인 하셨나요?",
                    "로그인 후 이용해 주세요!",
                    "error"
                  );
                }
              }}
              className="mypage"
            >
              마이페이지
            </li>

            {!localStorage.getItem("Access_Token") ? (
              <li onClick={() => navigate("/login")} className="login">
                로그인 / 회원가입
              </li>
            ) : (
              <li
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
                className="login"
              >
                로그아웃
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="top_cat_wrap">
        <div className="top_cat">
          <ul className="clearfix">
            <li>
              <button onClick={() => navigate("/")}>홈</button>
            </li>
            <li>
              <button onClick={() => navigate("/drinklist/drink")}>
                꿀정보
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/gamelist")}>꿀잼</button>
            </li>
          </ul>
          <button onClick={() => navigate("/post")} className="top_post_btn">
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
