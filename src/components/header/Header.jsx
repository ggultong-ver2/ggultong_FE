import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/reset.css";
import "./style.css";

function Header() {
  const navigate = useNavigate();

  const[keyword, setKeyWord] = useState("");
  const onSubmit = async () => {
    window.location.href = "/search/" + keyword;
  };

  return (
    <div className="header_container">
      <div className="headerwrap">
        <div className="logowrap">
          <span className="logo">
            <a href="/">LOGO</a>
          </span>
          <span className="logo_text">자취하는 우리를 위한 커뮤니티</span>
        </div>
        <nav className="gnb">
          <ul className="clearfix">
            <li className="search">
              <input
                type="text"
                id="keyword"
                placeholder="궁금한 자취 정보를 입력하세요"
                className="searchinp"
                onChange={(e) => {setKeyWord(e.target.value);}}
              />
              <button
                type="button"
                class="search_button"
                onClick={() => {onSubmit()}}
              />
            </li>
            <li>알림</li>
            <li onClick={() => navigate("/myconfirm")} className="myconfirm">
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
