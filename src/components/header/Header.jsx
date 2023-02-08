import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "../../pages/reset.css";
import { __getNotification } from "../../redux/modules/notificationSlice";
import NotificationList from "../notification/NotificationList";
import "./style.css";

const Header= (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [keyword, setKeyWord] = useState("");
  const onSubmit = async () => {
    window.location.href = "/search/" + keyword;
  };

  const [open, setOpen] = useState(false);

  const getNotification = () => {
    dispatch(__getNotification());

    setOpen(!open);
  };

  const OnKeyPress = e => {
    if (e.key === 'Enter') {
      onSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  if (window.location.pathname === '/post') return null;
  if (window.location.pathname === `/editpost/${id}`) return null;
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
              onKeyPress={OnKeyPress}
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
              <div className="notification_centre">
                <NotificationList />
              </div>
            ) : null}
            <li
              onClick={(res) => {
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
    </div>
  );
}

export default Header;
