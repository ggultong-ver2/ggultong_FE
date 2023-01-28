import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import { useInput } from "../lib/utils/useInput";
import { useDispatch } from "react-redux";
import __nickCheck from "../redux/modules/checkNickSlice";
import __socialNick from "../redux/modules/socialNickSlice";

function SocialNick() {
  const [nickname, setNickname] = useInput();
  const navigate = useNavigate();

  const onSignNickname = (e) => {
    e.preventDefault();
    console.log("nickname--->", nickname);
    __socialNick(nickname).then(() => {
      Swal.fire("회원가입 완료!", "꿀통에 오신것을 환영합니다!", "success");

      navigate(`/login`);
      // if (res.data.statusCode === 200) {
      //   Swal.fire(res.data.msg, "꿀통에 오신것을 환영합니다!", "success");
      //   navigate("/signcomplete");
      // } else {
      //   Swal.fire(
      //     res.data.msg,
      //     "아이디 및 비밀번호를 다시 확인해주세요!",
      //     "error"
      //   );
      // }
    });
  };

  // 닉네임 중복 체크 확인
  const onCheckNickName = (nickname) => {
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
        <StNickBox>
          <StLabel>닉네임</StLabel>
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
  background-color: #f9fafb;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;
const StCenterBox = styled.div`
  background-color: #ffffff;
  width: 588px;
  height: 663px;
  align-items: center;
  padding-top: 80px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  font-family: "Pretendard";
`;

const StSignBox = styled.div`
  width: 400px;
  height: 50px;
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-family: "Pretendard";
`;

const StInput = styled.input`
  width: 274px;
  height: 48px;
  padding-left: 10px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
  letter-spacing: 0.1em;
  margin-left: 10px;
  margin-top: 250px;
  margin-bottom: 10px;
  width: 384px;
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
  height: 48px;
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
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 13px;
  justify-content: left;
  display: flex;
  margin-right: 330px;
  font-weight: 600;
  font-family: "Pretendard";
`;
export default SocialNick;
