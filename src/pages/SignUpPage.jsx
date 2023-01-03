import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import Swal from "sweetalert2";
import __postSignup from "../redux/modules/signupSlice";

const PostLoginPage = () => {
  // const url1 =
  //   "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  // const url2 =
  //   "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";
  const [email, setEmail] = useInput();
  const [loginId, setloginId] = useInput();
  const [password, setPassword] = useInput();
  const [nickname, setNickname] = useInput();
  const [checkpassword, setCheckPassword] = useInput();

  const navigate = useNavigate();
  // 회원가입 관련
  const onSubmitSignup = (e) => {
    e.preventDefault();
    __postSignup({
      email,
      loginId,
      password,
      nickname,
    }).then((res) => {
      console.log("res:::::", res);
      if (res.data.statusCode === 200) {
        Swal.fire("Good job!", "You clicked the button!", "success");
      }
      navigate("/login");
    });
  };
  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
  };
  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
  };

  return (
    <StContainer onSubmit={onSubmitSignup}>
      <div>
        <StCenterBox>
          <StLoginBox>회원가입</StLoginBox>
          <Stdiv>상세 정보를 기입해주세요.</Stdiv>
          <StLabel htmlFor="loginId">아이디*</StLabel>
          <StBox>
            <StInput
              type="text"
              id="loginId"
              value={loginId}
              onChange={setloginId}
              placeholder="아이디를 입력해주세요."
              required
              minLength={6}
              maxLength={10}
            />
          </StBox>

          <br></br>
          <StLabel htmlFor="password">비밀번호*</StLabel>
          <StBox>
            <StInput
              onBlur={checkPassword}
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>
          <StBox>
            <StInput
              type="password"
              id="checkpassword"
              value={checkpassword}
              onChange={setCheckPassword}
              placeholder="비밀번호 재입력"
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>
          <br></br>
          <StLabel htmlFor="nickname">닉네임*</StLabel>
          <StBox>
            <StInput
              type="text"
              id="nickname"
              value={nickname}
              onChange={setNickname}
              placeholder="닉네임을 입력해주세요."
              required
              minLength={2}
              maxLength={8}
            />
          </StBox>
          <br></br>
          <StLabel htmlFor="email">이메일*</StLabel>
          <StBox>
            <StEmailInput
              onBlur={checkEmail}
              type="email"
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="유효한 이메일을 입력해주세요."
              required
              minLength={5}
              maxLength={30}
            />
            <StEmailBtn>인증번호 전송</StEmailBtn>
          </StBox>
          <StButton log>본인인증 확인</StButton>
        </StCenterBox>
      </div>
      {/* <div>
        <h1>로그인</h1>
        <StDiv inputbox>
          <StLabel htmlFor="username">ID</StLabel>
          <StInput
            type="text"
            id="username"
            value={username}
            onChange={setUserName}
            required
            minLength={5}
            maxLength={10}
          />
          <StLabel htmlFor="password">PW</StLabel>
          <StInput
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
            minLength={8}
            maxLength={15}
          />
        </StDiv>
      </div>
      <StDiv btns>
        <Stbutton log>로그인</Stbutton>
        <Stbutton reg onClick={() => navigate("/signup")}>
          회원가입
        </Stbutton>
      </StDiv> */}
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
`;

const StLoginBox = styled.div`
  letter-spacing: -0.1em;
  width: 400px;
  height: 50px;
  font-size: 45px;
  margin-bottom: 15px;
  display: flex;
  padding-bottom: 30px;
  border-bottom: 6px solid #dcdcdc;
  justify-content: center;
`;

const StLabel = styled.label`
  justify-content: left;
  display: flex;
  margin-right: 320px;
  font-weight: bold;
`;
const Stdiv = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  letter-spacing: -0.1em;
`;
const StBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
`;
const StCenterBox = styled.div`
  width: 450px;
  height: 700px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;

  /* margin: 5px 0 0px;
  padding: 30px 0px; */
  /* position: relative; */
  /* vertical-align: baseline; */
`;

const StInput = styled.input`
  width: 360px;
  height: 44px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 10px;
  letter-spacing: -0.1em;
  /* background-color: orange; */
  font-size: 16px;
  /* &:hover {
    border: 0.5px solid black;
  } */
`;

const IconBox = styled.img`
  /* width: 20px;
  height: 20px; */
  /* float: right; */
  margin-left: -40px;
`;

const SocialDiv = styled.img`
  /* width: 40px;
  height: 45px; */
  background-color: transparent;
`;

const SignDiv = styled.div`
  width: 1px;
  height: 16px;
  background-color: #c2c2c2;
`;

const SignBox = styled.div`
  width: 380px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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
      letter-spacing: -0.1em;
      border-radius: 10px;
      background-color: #fee000;
      text-decoration: none;
      color: black;
      cursor: pointer;
    `}
  ${(props) =>
    props.naver &&
    css`
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 175px;
      height: 60px;
      border: 0;
      margin-right: 20px;
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.1em;
      border-radius: 10px;
      background-color: #00bf18;
      text-decoration: none;
      color: white;
      cursor: pointer;
    `}
`;

const StEmailInput = styled.input`
  width: 250px;
  height: 44px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 10px;
  letter-spacing: -0.1em;
  /* background-color: orange; */
  font-size: 16px;
  /* &:hover {
    border: 0.5px solid black;
  } */
`;

const StEmailBtn = styled.button`
  width: 110px;
  height: 44px;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
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
      font-family: georgia;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #797777;
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
      cursor: pointer;
    `}
    ${(props) =>
    props.pw &&
    css`
      width: 120px;
      height: 40px;
      border: 0px;
      letter-spacing: -0.1em;
      background-color: white;
      color: #717171;
      font-weight: bold;
      font-size: 15px;
      padding-right: 10px;
      font-size: 15px;
      margin-left: 20px;
      cursor: pointer;
    `}
`;
export default PostLoginPage;
