import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import { __postLogin } from "../api/submit/Login";
import Swal from "sweetalert2";
import orline from "../assets/images/orline.png";
import loginprofile from "../assets/images/loginprofile.png";
import lock from "../assets/images/lock.png";
import naver from "../assets/images/navericon.png";
import kakao from "../assets/images/kakaoicon.png";
import "../pages/reset.css";
import NaverLogin from "./NaverLogin";

const PostLoginPage = () => {
  // const url1 =
  //   "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  // const url2 =
  //   "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";
  const STATE = Math.random().toString(36).substring(3, 14);
  const [loginId, setloginId] = useInput();
  const [password, setPassword] = useInput();

  const navigate = useNavigate();
  // 로그인 관련
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      loginId,
      password,
    }).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "꿀통에 오신것을 환영합니다!", "success");
        //console.log(res.header.access_token);
        navigate("/");
      } else {
        Swal.fire(
          res.data.msg,
          "아이디 및 비밀번호를 다시 확인해주세요!",
          "error"
        );
      }
      localStorage.setItem("Access_Token", res.headers.authorization);
      localStorage.setItem("nickname", res.data.nickname);
      localStorage.setItem("profileImg", res.data.profileImg);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("loginId", res.data.loginId);
    });
  };

  return (
    <StContainer onSubmit={onSubmitLogin}>
      <div>
        <StCenterBox>
          <StLoginBox>로그인</StLoginBox>
          <StLabel>아이디</StLabel>
          <StBox>
            <StInput
              type="text"
              id="loginId"
              value={loginId}
              onChange={setloginId}
              placeholder="아이디를 입력해주세요."
              required
              minLength={4}
              maxLength={30}
            />
          </StBox>
          <StLabel2>비밀번호</StLabel2>
          <StBox>
            <StInput
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="비밀번호를 입력해주세요."
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>

          <StButton log>로그인</StButton>
          <SignBox>
            <StButton reg onClick={() => navigate("/agree")}>
              이메일로 회원가입
            </StButton>
            <StButton pw onClick={() => navigate("/pwfind")}>
              비밀번호 재설정
            </StButton>
            <StButton pw onClick={() => navigate("/idfind")}>
              ID 찾기 /
            </StButton>
          </SignBox>

          <SocialBtn
            kakao
            href="https://kauth.kakao.com/oauth/authorize?client_id=0a5a9b8a46f9a0836b9ff04d61ffc21c&redirect_uri=https://dev.d134m2xe6xydy2.amplifyapp.com/user/kakao/callback&response_type=code"
          >
            <SocialDiv src={kakao} width="32px" height="32px" />
            카카오톡으로 로그인
          </SocialBtn>
          {/* <NaverIdLogin ref={naverRef} id="naverIdLogin" /> */}
          <NaverLoginBtn
            href={`https://nid.naver.com/oauth2.0/authorize?client_id=8PCgO32YgjQK0j2o2102&response_type=code&redirect_uri=https://dev.d134m2xe6xydy2.amplifyapp.com/user/naver/callback&state=${STATE}`}
          >
            <NaverIcon src={require("../assets/images/naver.png")} />
            <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
          </NaverLoginBtn>
          {/* <NaverLogin /> */}
        </StCenterBox>
      </div>
    </StContainer>
  );
};
const StContainer = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  min-height: 95vh;
  background-color: #f9fafb;
`;

const StLoginBox = styled.div`
  width: 400px;
  height: 50px;
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-family: "Pretendard";
`;

const StBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
`;

const StCenterBox = styled.div`
  background-color: #ffffff;
  width: 588px;
  height: 707px;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-top: 80px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  margin-bottom: 10px;
  width: 384px;
  height: 48px;
  /* border: 1px solid #cbcbcb; */
  border-radius: 4px;
  padding-left: 10px;
  font-family: "Pretendard";
  border: 1px solid #cbcbcb;
  font-size: 15px;

  &:focus {
    border: 1px solid #ffd665;
    outline: 1px solid #ffd665;
  }
`;

const SocialDiv = styled.img`
  margin-right: 20px;
  font-family: "Pretendard";
  background-color: transparent;
`;

const SignBox = styled.div`
  width: 380px;
  height: 50px;
  margin-bottom: 30px;
  font-family: "Pretendard";
`;

const SocialBtn = styled.a`
  ${(props) =>
    props.kakao &&
    css`
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
      padding-right: 10px;
      cursor: pointer;
    `}
  ${(props) =>
    props.naver &&
    css`
      margin-top: 20px;
      padding-right: 32px;
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
    `}
`;

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      margin-top: 25px;
      margin-bottom: 10px;
      width: 380px;
      height: 48px;
      border: 0;
      font-size: 16px;
      border-radius: 4px;
      background-color: #b5b5b5;
      color: white;
      cursor: pointer;
      font-family: "Pretendard";
      &:hover {
        background-color: #ffd665;
        font-family: "Pretendard";
        color: black;
        font-weight: 600;
        font-size: 16px;
      }
    `}
  ${(props) =>
    props.reg &&
    css`
      float: left;
      width: 90px;
      height: 20px;
      border: 0px;
      display: flex;
      align-items: center;
      justify-content: left;
      background-color: white;
      color: #717171;
      font-weight: bold;
      font-size: 12px;
      margin-top: 8px;
      font-family: "Pretendard";
      cursor: pointer;
    `}
    ${(props) =>
    props.pw &&
    css`
      float: right;
      display: flex;
      align-items: center;
      justify-content: right;
      width: 80px;
      height: 20px;
      border: 0px;
      background-color: white;
      color: #717171;
      font-weight: bold;
      font-size: 12px;
      font-family: "Pretendard";
      cursor: pointer;
      margin-top: 8px;
    `}
`;
const StLabel = styled.label`
  margin-bottom: 15px;
  justify-content: left;
  font-size: 14px;
  display: flex;
  margin-right: 340px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StLabel2 = styled.label`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 13px;
  justify-content: left;
  display: flex;
  margin-right: 330px;
  font-weight: 600;
  font-family: "Pretendard";
`;

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

export default PostLoginPage;
