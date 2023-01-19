import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import __pwcheck from "../redux/modules/checkPwSlice";
import { useInput } from "../lib/utils/useInput";
import { useDispatch } from "react-redux";
function MyConfirm() {
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  const onCheckPassword = (password) => {
    console.log("password--->", password);
    __pwcheck({
      password,
    }).then((res) => {
      console.log("res:::::", res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "반갑습니다!", "success");
        navigate("/mypage");
      } else {
        navigate("/myconfirm");
        Swal.fire(res.data.msg, "비밀번호를 다시 확인해주세요!", "error");
      }
    });
  };

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>마이페이지</StSignBox>
        <StLabel>현재 비밀번호</StLabel>
        <StInput
          placeholder="비밀번호를 입력 해 주세요"
          type="password"
          id="password"
          onChange={setPassword}
          value={password}
          required
          minLength={8}
          maxLength={15}
        ></StInput>
        <StBtnBox>
          <StBack onClick={() => navigate("/mypage")}>이전</StBack>
          <StButton
            onClick={() => {
              onCheckPassword(password);
              navigate("/mypage");
            }}
          >
            확인
          </StButton>
        </StBtnBox>
      </StCenterBox>
    </StContainer>
  );
}
const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;
const StCenterBox = styled.div`
  width: 588px;
  height: 570px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  background-color: white;
  flex-direction: column;
  font-family: "Pretendard";
`;
const StSignBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 24px;

  margin-top: 50px;
  display: flex;
  padding-top: 0px;

  justify-content: center;
  font-family: "Pretendard";
`;

const StLabel = styled.label`
  margin-bottom: 10px;
  margin-left: 30px;
  justify-content: left;
  font-size: 14px;
  display: flex;
  margin-right: 340px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StInput = styled.input`
  width: 384px;
  height: 48px;
  padding-left: 10px;
  margin-bottom: 150px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
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
export default MyConfirm;
