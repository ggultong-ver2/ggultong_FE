import { useNavigate } from "react-router-dom";
import "../../pages/reset.css";
import "./style.css";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header_container">
      <div className="headerwrap">
        <div className="logowrap">
          <span className="logo">
            <a href="">LOGO</a>
          </span>
          <span className="logo_text">자취하는 우리를 위한 커뮤니티</span>
        </div>
        <nav className="gnb">
          <ul className="clearfix">
            <li>마이페이지</li>
            <li>좋아요</li>
            <li>스크랩</li>
            {!localStorage.getItem("id") ? (
              <li onClick={() => navigate("/login")} className="login">
                로그인
              </li>
            ) : (
              <li
                onClick={() => {
                  localStorage.removeItem("id");
                  localStorage.removeItem("nickname");
                  localStorage.removeItem("profileImg");
                  navigate("/LoginPage");
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
