import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const IP = "tom-jelly.shop";
  const navigate = useNavigate();
  const naverRef = useRef();

  //76cd508f-df81-4a2e-b2a2-5819ccdb9423

  const getToken = async () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    const state = "";
    // const state = new URL(window.location.href).searchParams.get("state");
    console.log("token:::", token);

    //
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

  useEffect(() => {
    try {
      getToken();
      ////토큰수정////
    } catch (err) {
      console.log(err);
    }
  }, []);
  // const naverURL =
  //   `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=` +
  //   Math.random().toString(36).substring(3, 14);

  return (
    <div>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn href="https://nid.naver.com/oauth2.0/authorize?client_id=8PCgO32YgjQK0j2o2102&response_type=code&redirect_uri=https://dev.d134m2xe6xydy2.amplifyapp.com/user/naver/callback&state=state">
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
