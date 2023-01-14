import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import __postLogin from "../redux/modules/loginSlice";
import Swal from "sweetalert2";
import orline from "../assets/images/orline.png";
import loginprofile from "../assets/images/loginprofile.png";
import lock from "../assets/images/lock.png";
import naver from "../assets/images/navericon.png";
import kakao from "../assets/images/kakaoicon.png";
import "../pages/reset.css";

const PostLoginPage = () => {
  // const url1 =
  //   "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  // const url2 =
  //   "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";

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
    });
  };

  return (
    <StContainer onSubmit={onSubmitLogin}>
      <div>
        <StCenterBox>
          <StLoginBox>로그인</StLoginBox>
          {/* <StRightBox2> */}
          <img src={null} alt="" />
          <br></br>
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
            <IconBox src={loginprofile} width="20px" height="20px" />
          </StBox>
          <StLine />
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
            <IconBox src={lock} width="20px" height="20px" />
          </StBox>
          <StLine />
          <StButton log>로그인</StButton>
          <SignBox>
            <StButton reg onClick={() => navigate("/agree")}>
              회원가입
            </StButton>
            <SignDiv />
            <StButton pw onClick={() => navigate("/pw")}>
              비밀번호 찾기
            </StButton>
          </SignBox>
          <img src={orline} width="450px" alt="" />
          <div>
            <SocialBtn naver>
              <SocialDiv src={naver} width="35px" height="35px" />
              네이버로 로그인
            </SocialBtn>
            <SocialBtn
              kakao
              href="https://kauth.kakao.com/oauth/authorize?client_id=984b3a885f96f9996efd98ed1a00deab&redirect_uri=https://dev.d134m2xe6xydy2.amplifyapp.com/user/kakao/callback&response_type=code"
            >
              <SocialDiv src={kakao} width="45px" height="45px" />
              카카오톡으로 로그인
            </SocialBtn>
          </div>
        </StCenterBox>
      </div>
    </StContainer>
  );
};
const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;

const StLoginBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 40px;
  margin-bottom: 10px;
  display: flex;
  border-bottom: 6px solid #dcdcdc;
  justify-content: center;
  font-family: "Pretendard";
`;

const StBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
`;
const StLine = styled.div`
  margin-bottom: 10px;
  width: 380px;
  height: 1px;
  background-color: #c2c2c2;
  font-family: "Pretendard";
`;

const StCenterBox = styled.div`
  width: 450px;
  height: 600px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  font-family: "Pretendard";
  /* margin: 5px 0 0px;
  padding: 30px 0px; */
  /* position: relative; */
  /* vertical-align: baseline; */
`;

const StInput = styled.input`
  width: 370px;
  height: 38px;
  border: 0;
  padding-left: 10px;
  font-family: "Pretendard";

  /* background-color: orange; */
  font-size: 15px;
  /* &:hover {
    border: 0.5px solid black;
  } */
`;

const IconBox = styled.img`
  /* width: 20px;
  height: 20px; */
  /* float: right; */
  font-family: "Pretendard";
  margin-left: -40px;
`;

const SocialDiv = styled.img`
  /* width: 40px;
  height: 45px; */
  font-family: "Pretendard";
  background-color: transparent;
`;

const SignDiv = styled.div`
  width: 1px;
  height: 16px;
  background-color: #c2c2c2;
  font-family: "Pretendard";
`;

const SignBox = styled.div`
  width: 380px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-family: "Pretendard";
`;

const SocialBtn = styled.a`
  ${(props) =>
    props.kakao &&
    css`
      float: right;
      display: flex;
      align-items: center;
      margin-top: 20px;
      width: 175px;
      height: 60px;
      border: 0;
      font-size: 14px;

      border-radius: 10px;
      background-color: #fee000;
      text-decoration: none;
      color: black;
      font-family: "Pretendard";
      cursor: pointer;
    `}
  ${(props) =>
    props.naver &&
    css`
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Pretendard";
      width: 175px;
      height: 60px;
      border: 0;
      margin-right: 20px;
      margin-top: 20px;
      font-size: 14px;

      border-radius: 10px;
      background-color: #00bf18;
      text-decoration: none;
      color: white;
      cursor: pointer;
    `}
`;

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      margin-top: 40px;
      margin-bottom: 10px;
      width: 380px;
      height: 48px;
      border: 0;
      font-size: 18px;
      border-radius: 4px;
      background-color: #b5b5b5;
      color: white;
      cursor: pointer;
      font-family: "Pretendard";
      &:hover {
        background-color: #797777;
        font-family: "Pretendard";
      }
    `}
  ${(props) =>
    props.reg &&
    css`
      width: 80px;
      height: 40px;
      border: 0px;
      background-color: white;
      color: #717171;
      font-weight: bold;
      font-size: 15px;
      padding-right: 10px;
      font-size: 15px;
      margin-right: 20px;
      margin-left: 40px;
      font-family: "Pretendard";
      cursor: pointer;
    `}
    ${(props) =>
    props.pw &&
    css`
      width: 120px;
      height: 40px;
      border: 0px;

      background-color: white;
      color: #717171;
      font-weight: bold;
      font-size: 15px;
      padding-right: 10px;
      font-size: 15px;
      margin-left: 20px;
      font-family: "Pretendard";
      cursor: pointer;
    `}
`;
export default PostLoginPage;
