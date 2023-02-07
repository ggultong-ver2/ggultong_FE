import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../lib/utils/useInput";
import Swal from "sweetalert2";
import "../pages/reset.css";
import { __pwfind } from "../api/submit/Login";
import { __Idfind } from "../api/submit/Login";

const Idfind = () => {
  const [email, setEmail] = useInput();

  const navigate = useNavigate();
  // 회원가입 관련
  const onSubmitIdFind = (e) => {
    e.preventDefault();
    __Idfind({
      email,
    }).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, res.data.loginId, "success");
      } else {
        Swal.fire(res.data.msg, "없는 이메일 입니다.", "error");
        navigate("/login");
      }
    });
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
  };

  return (
    <StContainer onSubmit={onSubmitIdFind}>
      <div>
        <StCenterBox>
          <StLoginBox>아이디 찾기</StLoginBox>

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
              minLength={5}
              maxLength={30}
            />
          </StBox>
          <br></br>
          <StBtnBox>
            <StBack onClick={() => navigate("/login")}>이전</StBack>
            <StButton log>다음</StButton>
          </StBtnBox>
        </StCenterBox>
      </div>
    </StContainer>
  );
};
const StContainer = styled.form`
  width: 100%;
  height: 96.6vh;
  display: flex;
  background-color: #f9fafb;
  align-items: center;
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

const StBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
`;
const StCenterBox = styled.div`
  width: 588px;
  height: 800px;
  background-color: #ffffff;
  padding-top: 80px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
`;

const StEmailInput = styled.input`
  width: 384px;
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
  margin-top: 150px;
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
      margin-top: 150px;
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
export default Idfind;
