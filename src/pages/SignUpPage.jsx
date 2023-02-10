import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import Swal from "sweetalert2";
import { __postSignup } from "../api/submit/Login";
import { __idcheck } from "../api/submit/Login";
import { __emailcode } from "../api/submit/Login";
import { __emailsend } from "../api/submit/Login";
import { __nickCheck } from "../api/submit/Login";
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
  const [Idtag, setIdtag] = useState();
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const [isemail, setIsemail] = useState();
  const [visible, setVisible] = useState(false);
  const [emailP, setEmailP] = useState();

  function isPassword(asValue) {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const PWChk = () => {
    if (!isPassword(password)) {
      setPWPtag(
        <StPs>사용 불가. 숫자/영문/특수문자를 모두포함한, 8-15자</StPs>
      );
    } else {
      setPWPtag(<StPs2>사용가능한 비밀번호 입니다</StPs2>);
    }
  };

  function isId(asValue) {
    const regExp = /^[a-zA-Z0-9]*$/;
    return regExp.test(asValue);
  }

  const IdChk = () => {
    if (!isId(loginId)) {
      setIdtag(<StPs>사용 불가. 영문/숫자를 모두 포함한, 6-12자</StPs>);
    } else {
      setIdtag(<StPs2>올바른 형식입니다. 중복확인을 진행 해주세요!</StPs2>);
    }
  };

  const PWConfirmChk = () => {
    if (password !== PWConfirm) {
      setPWConfirmP(<StPs>비밀번호가 일치하지않습니다</StPs>);
    } else {
      setPWConfirmP(<StPs2>비밀번호 확인되었습니다.</StPs2>);
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
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "", "success");
        navigate("/signcomplete");
      } else {
        Swal.fire(res.data.msg, "", "error");
      }
    });
  };

  //바디형식 인증번호확인
  const onEmailCode = (e) => {
    // e.preventDefault();
    __emailcode({
      email,
      emailCode,
    }).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "가입을 완료해주세요!", "success");
      } else {
        Swal.fire(res.data.msg, "다시 확인해주세요!", "error");
      }
      // if (res.data.msg === "이메일 인증 완료") {

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
      setEmailP(res.data.msg);

      if (res.data.statusCode === 200) {
        Swal.fire(
          res.data.msg,
          "해당 메일함에서 인증번호를 확인해주세요.",
          "success"
        );
        return;
      } else {
        if (visible) {
          return;
        }
        Swal.fire(res.data.msg, "이메일을 다시 확인해주세요!", "error");
      }
    });
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
  };

  // id 중복 체크 확인
  const onCheckUserName = (loginId) => {
    __idcheck(loginId).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "다음으로 넘어가주세요!", "success");
      } else {
        Swal.fire(res.data.msg, "다른 아이디를 써주세요", "error");
      }
    });
  };
  // 닉네임 중복 체크 확인
  const onCheckNickName = (nickname) => {
    __nickCheck(nickname).then((res) => {
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

  function handleOnInput(e) {
    e.value = e.value.replace(/[^A-Za-z]/gi, "");
  }

  return (
    <StContainer onSubmit={onSubmitSignup}>
      <div>
        <StCenterBox>
          <StLoginBox>회원가입</StLoginBox>
          <StLabel htmlFor="loginId">아이디</StLabel>
          <StBox>
            <StId
              type="text"
              id="loginId"
              value={loginId}
              onBlur={IdChk}
              onChange={setloginId}
              placeholder="최소6~12자, 영문/숫자 포함"
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
          <StP>{<p className="ptag">{Idtag}</p>}</StP>
          <br></br>
          <StLabel2 htmlFor="password">비밀번호</StLabel2>
          <StBox>
            <StInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={PWChk}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>
          <div>
            <StP>{<p className="ptag">{PWPtag}</p>}</StP>
          </div>
          <StBox>
            <StInput
              type="password"
              id="PWConfirm"
              value={PWConfirm}
              onChange={(e) => {
                setPWConfirm(e.target.value);
              }}
              onBlur={PWConfirmChk}
              placeholder="비밀번호를 재입력 해주세요."
              required
              minLength={8}
              maxLength={15}
            />
          </StBox>
          <div>
            <StP>{<p className="ptag">{PWConfirmP}</p>}</StP>
          </div>
          <br></br>
          <StLabel htmlFor="nickname">닉네임</StLabel>
          <StBox>
            <NickInput
              type="text"
              id="nickname"
              value={nickname}
              onChange={setNickname}
              placeholder="닉네임을 입력해주세요. 최소2~8자"
              required
              minLength={2}
              maxLength={8}
            />
            <StButton
              nickbtn
              onClick={() => {
                onCheckNickName(nickname);
              }}
              type="button"
            >
              중복확인
            </StButton>
          </StBox>
          <br></br>
          <StLabel htmlFor="email">이메일</StLabel>
          <StBox>
            <StEmailInput
              type="email"
              id="email"
              value={email}
              onChange={setEmail}
              onClick={checkEmail}
              placeholder="이메일을 입력해주세요."
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
          <StTimer>{visible && <StP>{emailP}</StP>}</StTimer>
          <StLabel2 htmlFor="emailcode">인증번호</StLabel2>
          <StBox>
            <StEmailInput
              id="emailcode"
              type="text"
              value={emailCode}
              onChange={setEmailCode}
              placeholder="인증번호를 입력해주세요."
              required
              minLength={6}
              maxLength={6}
            />
            <StEmailBtn
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
          <StTimer>{visible && <Timer />}</StTimer>
          <StBtnBox>
            <StBack onClick={() => navigate("/agree")}>이전</StBack>
            <StButton log>가입</StButton>
          </StBtnBox>
        </StCenterBox>
      </div>
    </StContainer>
  );
};
const StContainer = styled.form`
  width: 100%;
  min-height: 93vh;
  display: flex;
  background-color: #f9fafb;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;

const StLoginBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 24px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-family: "Pretendard";
`;

const StLabel = styled.label`
  margin-bottom: 5px;
  justify-content: left;
  font-size: 14px;
  display: flex;
  margin-right: 340px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StLabel2 = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  justify-content: left;
  display: flex;
  margin-right: 330px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StBox = styled.div`
  width: 380px;
  display: flex;
  font-family: "Pretendard";
`;
const StCenterBox = styled.div`
  width: 588px;
  height: 908px;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: #ffffff;
  padding-top: 80px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
`;

const StInput = styled.input`
  width: 384px;
  height: 48px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 5px;
  font-family: "Pretendard";
  font-size: 14px;
  &:focus {
    border: 1px solid #ffd665;
    outline: 1px solid #ffd665;
  }
`;
const NickInput = styled.input`
  width: 274px;
  height: 48px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 5px;
  font-family: "Pretendard";
  font-size: 14px;
  &:focus {
    border: 1px solid #ffd665;
    outline: 1px solid #ffd665;
  }
`;

const StId = styled.input`
  width: 274px;
  height: 48px;
  border: 1px solid #d9d9d9;
  color: black;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 10px;
  font-family: "Pretendard";
  &:focus {
    border: 1px solid #ffd665;
    outline: 1px solid #ffd665;
  }
`;
const StEmailInput = styled.input`
  width: 274px;
  height: 48px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 5px;
  font-family: "Pretendard";
  &:disabled {
    background-color: #c2c2c2;
    font-family: "Pretendard";
  }

  font-size: 14px;
  &:focus {
    border: 1px solid #ffd665;
    outline: 1px solid #ffd665;
  }
`;

const StBtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

const StBack = styled.button`
  font-family: "Pretendard";
  width: 186px;
  height: 48px;
  border: 1px solid #a0a0a0;
  font-size: 18px;
  border-radius: 4px;
  background-color: #ffffff;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 0;
    background-color: #ffd665;
    font-family: "Pretendard";
  }
`;

const StP = styled.p`
  width: 384px;
  padding-left: 5px;

  font-size: 12px;
  font-family: "Pretendard";
`;

const StPs = styled.p`
  width: 384px;
  padding-left: 5px;
  margin-top: 7px;
  font-size: 12px;
  color: red;
  font-family: "Pretendard";
`;

const StPs2 = styled.p`
  width: 384px;
  padding-left: 5px;
  margin-top: 7px;
  font-size: 12px;
  color: limegreen;
  font-family: "Pretendard";
`;

const StTimer = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 384px;
  font-size: 12px;
  font-family: "Pretendard";
`;

const StEmailBtn = styled.button`
  width: 100px;
  height: 48px;
  margin-top: 4px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 4px;
  font-weight: 600;
  background-color: white;
  font-family: "Pretendard";
  cursor: pointer;
  &:hover {
    border: 0;
    color: black;
    background-color: #ffd665;
  }
`;
const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      letter-spacing: 0.1em;
      margin-bottom: 10px;
      width: 186px;
      height: 48px;
      border: 0;
      font-size: 16px;
      font-weight: 600;
      border-radius: 4px;
      background-color: #b5b5b5;
      font-family: "Pretendard";
      color: white;
      cursor: pointer;
      &:hover {
        color: black;
        background-color: #ffd665;
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
      font-weight: 600;
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
      font-family: "Pretendard";
      padding-right: 10px;
      font-size: 14px;
      margin-left: 20px;
      cursor: pointer;
    `}
    ${(props) =>
    props.checkbtn &&
    css`
      width: 100px;
      height: 48px;
      margin-top: 10px;
      margin-left: 10px;
      border: 1px solid black;
      border-radius: 4px;
      background-color: white;
      font-family: "Pretendard";
      font-weight: 600;
      cursor: pointer;
      &:hover {
        border: 0;
        color: black;
        background-color: #ffd665;
      }
    `}
    ${(props) =>
    props.nickbtn &&
    css`
      width: 100px;
      height: 48px;
      margin-top: 4px;
      margin-left: 10px;
      border: 1px solid black;
      border-radius: 4px;
      background-color: white;
      font-family: "Pretendard";
      font-weight: 600;
      cursor: pointer;
      &:hover {
        border: 0;
        color: black;
        background-color: #ffd665;
      }
    `}
`;
export default PostLoginPage;
