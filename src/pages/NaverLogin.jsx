import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const IP = "43.201.7.130:8080";
  const navigate = useNavigate();
  const naverRef = useRef();
  const { naver } = window;
  const NAVER_CLIENT_ID = "8PCgO32YgjQK0j2o2102";
  const NAVER_CALLBACK_URL =
    "https://dev.d134m2xe6xydy2.amplifyapp.com/user/naver/callback";

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      // 팝업창으로 로그인을 진행할 것인지?
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes("code") && getToken();
    window.location.href.includes("state") && getToken();
  };
  //76cd508f-df81-4a2e-b2a2-5819ccdb9423

  const getToken = async () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    const state = window.location.href.split("=")[2].split("&")[0];
    // const state = new URL(window.location.href).searchParams.get("state");
    console.log("token:::", token);
    console.log("state:::", state);

    axios
      .get(`http://${IP}/api/user/naver/callback?code=${token}&state=${state}`)
      .then((res) => {
        console.log("RES", res.data);
        localStorage.setItem("Access_Token", res.headers.authorization);
        localStorage.setItem("nickname", res.data.nickname);
        localStorage.setItem("profileImg", res.data.profileImg);
        localStorage.setItem("email", res.data.email);
        return res;
      })
      .then((res) => {
        console.log(res.data.nickname);
        if (res.data.nickname === "tlsrbrkdlqwk") {
          console.log("nickname", res.data.nickname);
          navigate("/socialnick");
        } else {
          console.log("else", res.data.nickname);
          navigate("/");
        }
      });
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);
  // AAAAORnIFZeLqsaCl2OOTrvfnCoczc3LuMa2ZQiGj1hVFSfyFNcSvBzRsCx3zzzg5GrPktZqlLqlTurfA6b0t7myy_M
  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };

  return (
    <div>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon src={require("../assets/images/naver.png")} />
        <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </div>
  );
};

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.a`
  margin-top: 20px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  border: 1px solid #b5b5b5;
  align-items: center;
  width: 384px;
  height: 48px;
  font-size: 14px;
  border-radius: 4px;
  font-family: "Pretendard";
  text-decoration: none;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
const NaverIcon = styled.img`
  margin-right: 20px;
  width: 32px;
  height: 32px;
  font-family: "Pretendard";
  background-color: transparent;
`;

const NaverLoginTitle = styled.span`
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-right: 20px;
  font-family: "Pretendard";
  background-color: transparent;
`;
export default NaverLogin;
