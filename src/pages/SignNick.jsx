import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import { useInput } from "../lib/utils/useInput";
import { useDispatch } from "react-redux";
import __signNick from "../redux/modules/signnickSlice";
import __nickCheck from "../redux/modules/checkNickSlice";

function SignNick() {
  const [nickname, setNickname] = useInput();
  const navigate = useNavigate();

  const onSignNickname = (e) => {
    e.preventDefault();
    console.log("nickname--->", nickname);
    __signNick({
      nickname,
    }).then((res) => {
      console.log("res:::::", res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "꿀통에 오신것을 환영합니다!", "success");
        //console.log(res.header.access_token);
        // navigate("/signcomplete");
      } else {
        Swal.fire(
          res.data.msg,
          "아이디 및 비밀번호를 다시 확인해주세요!",
          "error"
        );
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

  return (
    <StContainer onSubmit={onSignNickname}>
      <StCenterBox>
        <StSignBox>회원가입</StSignBox>
        <StLabels>상세 정보를 기입해주세요.</StLabels>
        <br></br>
        <br></br>
        <br></br>
        <StNickBox>
          <StLabel>닉네임*</StLabel>

          <StInput
            placeholder="닉네임을 입력해주세요."
            type="text"
            id="nickcname"
            onChange={setNickname}
            value={nickname}
            required
            minLength={2}
            maxLength={8}
          ></StInput>

          <StButtons
            checkbtn
            onClick={() => {
              onCheckNickName(nickname);
            }}
            type="button"
          >
            중복확인
          </StButtons>
        </StNickBox>
        <br></br>
        <br></br>
        <StButton onClick={onSignNickname}>확인</StButton>
        <br></br>
        <br></br>
      </StCenterBox>
    </StContainer>
  );
}
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
const StCenterBox = styled.div`
  width: 400px;
  height: 850px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
`;
const StSignBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 45px;
  margin-bottom: 25px;
  margin-top: 50px;
  display: flex;
  padding-top: 0px;
  border-bottom: 6px solid black;
  justify-content: center;
  font-family: "Pretendard";
`;
const StLabels = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: "Pretendard";
`;

const StInput = styled.input`
  width: 280px;
  height: 45px;
  padding-left: 10px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
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
  font-family: "Pretendard";
  cursor: pointer;
  &:hover {
    background-color: #797777;
    font-family: "Pretendard";
  }
`;

const StButtons = styled.button`
  width: 100px;
  height: 45px;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  font-family: "Pretendard";
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const StNickBox = styled.div`
  margin-left: 10px;
`;

const StLabel = styled.label`
  margin-right: 250px;
  margin-bottom: 15px;
  font-weight: bold;
  font-family: "Pretendard";
`;
export default SignNick;
