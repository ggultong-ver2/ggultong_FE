import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import Swal from "sweetalert2";
import __postSignup from "../redux/modules/signupSlice";
import __idcheck from "../redux/modules/checkIdSlice";
import __emailcode from "../redux/modules/emailcodeSlice";
import __emailsend from "../redux/modules/sendemailSlice";
import __nickCheck from "../redux/modules/checkNickSlice";
import "../pages/reset.css";
import Timer from "../components/Timer/Timer";

const PostLoginPage = () => {
  // const url1 =
  //   "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  // const url2 =
  //   "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";
  const [email, setEmail] = useInput();
  const [emailCode, setEmailCode] = useInput();
  const [loginId, setloginId] = useInput();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useInput();
  const [disable, setDisable] = useState(false);
  const [PWPtag, setPWPtag] = useState();
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const [isemail, setIsemail] = useState();
  const [visible, setVisible] = useState(false);
  function isPassword(asValue) {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const PWChk = () => {
    if (!isPassword(password)) {
      setPWPtag("사용 불가능합니다. 숫자/영문/특수문자를 모두포함한, 8자~15자");
    } else {
      setPWPtag("사용가능한 비밀번호 입니다");
    }
  };

  const PWConfirmChk = () => {
    if (password !== PWConfirm) {
      setPWConfirmP("비밀번호가 일치하지않습니다");
    } else {
      setPWConfirmP("비밀번호 확인되었습니다.");
    }
  };

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
        Swal.fire(res.data.msg, "", "success");
      }
      navigate("/signcomplete");
    });
  };

  //바디형식 인증번호확인
  const onEmailCode = (e) => {
    // e.preventDefault();
    __emailcode({
      email,
      emailCode,
    }).then((res) => {
      console.log(isemail);
      if (res.data.statusCode === 200) {
        console.log(isemail, emailCode);
        Swal.fire(res.data.msg, "가입을 완료해주세요!", "success");
      } else {
        Swal.fire(res.data.msg, "다시 확인해주세요", "error");
      }
      // if (isemail === Number(emailcode)) {
      //   console.log(isemail, emailcode);
      //   Swal.fire(
      //     "인증번호 확인되었습니다.",
      //     "가입을 완료해주세요!",
      //     "success"
      //   );
      // } else {
      //   Swal.fire("인증번호가 불일치합니다!", "다시 확인해주세요", "error");
      // }
    });
  };

  //바디형식 이메일코드 전송
  const onCheckEmail = (e) => {
    __emailsend({
      email,
    }).then((res) => {
      setIsemail(res.data);
      console.log(res);

      Swal.fire(
        "인증번호 전송이 완료되었습니다!",
        "해당 메일함에서 인증번호를 확인해주세요.",
        "success"
      );
    });
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
  };

  // id 중복 체크 확인
  const onCheckUserName = (loginId) => {
    console.log("loginID---->", loginId);
    __idcheck(loginId).then((res) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "다음으로 넘어가주세요!", "success");
      } else {
        Swal.fire(res.data.msg, "다른 아이디를 써주세요", "error");
      }
    });
  };
  // 닉네임 중복 체크 확인
  const onCheckNickName = (nickname) => {
    console.log("nickname---->", nickname);
    __nickCheck(nickname).then((res) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "좋은 닉네임이군요!", "success");
      } else {
        Swal.fire(res.data.msg, "중복된 닉네임입니다", "error");
      }
    });
  };

  const handleClick = () => {
    setDisable(!disable);
  };

  return (
    <StContainer onSubmit={onSubmitSignup}>
      <div>
        <StCenterBox>
          <StLoginBox>회원가입</StLoginBox>
          <Stdiv>상세 정보를 기입해주세요.</Stdiv>
          <StLabel htmlFor="loginId">아이디*</StLabel>
          <StBox>
            <StId
              type="text"
              id="loginId"
              value={loginId}
              onChange={setloginId}
              placeholder="아이디를 입력해주세요."
              required
              minLength={6}
              maxLength={10}
            />
            <StButton
              checkbtn
              onClick={() => {
                onCheckUserName(loginId);
              }}
              type="button"
            >
              ID 중복확인
            </StButton>
          </StBox>
          <br></br>
          <StLabel htmlFor="password">비밀번호*</StLabel>
          <StBox>
            <StInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e);
              }}
              onBlur={PWChk}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              required
              minLength={8}
              maxLength={15}
            />
            .
          </StBox>
          {<p className="ptag">{PWPtag}</p>}
          <StBox>
            <StInput
              type="password"
              id="PWConfirm"
              value={PWConfirm}
              onChange={(e) => {
                setPWConfirm(e.target.value);
              }}
              onBlur={PWConfirmChk}
              placeholder="비밀번호 재입력"
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>
          {<p className="ptag">{PWConfirmP}</p>}
          <br></br>
          <StLabel htmlFor="nickname">닉네임*</StLabel>
          <StBox>
            <NickInput
              type="text"
              id="nickname"
              value={nickname}
              onChange={setNickname}
              placeholder="닉네임을 입력해주세요. (최소 2 - 8자)"
              required
              minLength={2}
              maxLength={8}
            />
            <StButton
              checkbtn
              onClick={() => {
                onCheckNickName(nickname);
              }}
              type="button"
            >
              중복확인
            </StButton>
          </StBox>
          <br></br>
          <StLabel htmlFor="email">이메일*</StLabel>
          <StBox>
            <StEmailInput
              type="email"
              id="email"
              value={email}
              onChange={setEmail}
              onClick={checkEmail}
              placeholder="ex ) abc@naver.com"
              required
              disabled={disable}
              minLength={5}
              maxLength={30}
            />
            <StEmailBtn
              checkbtn
              onClick={(e, res) => {
                onCheckEmail(email);
                handleClick();
                setVisible(!visible);
              }}
              type="button"
            >
              {visible ? "다시 보내기" : "인증번호 전송"}
            </StEmailBtn>
          </StBox>
          <StBox>
            <StEmailInput
              type="text"
              id="emailcode"
              value={emailCode}
              onChange={setEmailCode}
              placeholder="인증번호를 입력해주세요!"
              required
              minLength={6}
              maxLength={6}
            />
            <StEmailBtn
              id="emailcode"
              checkbtn
              onClick={(e) => {
                e.preventDefault();
                onEmailCode(emailCode);
                // onDisabled(e);
              }}
              type="button"
            >
              확인
            </StEmailBtn>
          </StBox>
          {visible && <Timer />}
          <StButton log>가입하기</StButton>
        </StCenterBox>
      </div>
    </StContainer>
  );
};
const StContainer = styled.form`
  width: 100%;
  height: 96.6vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const StLoginBox = styled.div`
  letter-spacing: -0.1em;
  width: 400px;
  height: 80px;
  font-size: 45px;
  margin-bottom: 15px;
  display: flex;
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
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 20px;
  letter-spacing: -0.1em;
`;
const StBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
`;
const StCenterBox = styled.div`
  width: 400px;
  height: 850px;
  justify-content: center;
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
  margin-top: 5px;
  letter-spacing: -0.1em;
  font-size: 16px;
`;
const NickInput = styled.input`
  width: 250px;
  height: 44px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 5px;
  letter-spacing: -0.1em;
  font-size: 16px;
`;

const StId = styled.input`
  width: 250px;
  height: 44px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 10px;
  letter-spacing: -0.1em;
  font-size: 16px;
`;
const StEmailInput = styled.input`
  width: 250px;
  height: 44px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 10px;
  letter-spacing: -0.1em;
  &:disabled {
    background-color: #c2c2c2;
  }
  /* background-color: orange; */
  font-size: 16px;
  /* &:hover {
    border: 0.5px solid black;
  } */
`;

const StEmailBtn = styled.button`
  width: 110px;
  height: 44px;
  margin-top: 8px;
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
      margin-top: 30px;
      margin-bottom: 10px;
      margin-right: 15px;
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
    ${(props) =>
    props.checkbtn &&
    css`
      width: 110px;
      height: 45px;
      margin-top: 8px;
      margin-left: 10px;
      border: 1px solid black;
      border-radius: 4px;
      background-color: white;
      cursor: pointer;
      &:hover {
        background-color: #dcdcdc;
      }
    `}
`;
export default PostLoginPage;
