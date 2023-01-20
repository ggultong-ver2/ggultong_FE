import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/reset.css";
import "./style.css";

function Header() {
  const navigate = useNavigate();

  const [keyword, setKeyWord] = useState("");
  const onSubmit = async () => {
    window.location.href = "/search/" + keyword;
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () =>{
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
            <li onClick={handleOpen} className="alarm">
              알림
            </li>
            {open ? (
              <ul className="alarm_menu">
                <li>읽지 않은 알림 (1)</li>
                <li className="menu_item">lidiee 님이 '김찌 레시피' 게시글에 댓글을 달았습니다.</li>
                <li className="menu_item">lidiee 님이 '김찌 레시피' 게시글에 댓글을 달았습니다.</li>
              </ul>
            ) : null}
            <li onClick={() => navigate("/mypage")} className="mypage">
              마이페이지
            </li>

            {!localStorage.getItem("Access_Token") ? (
              <li onClick={() => navigate("/login")} className="login">
                로그인
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
