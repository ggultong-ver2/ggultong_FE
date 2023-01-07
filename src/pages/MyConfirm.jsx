import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import __pwcheck from "../redux/modules/checkPwSlice copy";
import { useInput } from "../lib/utils/useInput";
function MyConfirm() {
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  const onCheckPassword = (password) => {
    console.log("password--->", password);
    __pwcheck(password).then((res) => {
      console.log(password);

      //   if (res.data.statusCode === 200) {
      //     Swal.fire(res.data.msg, "확인되었습니다.", "success");
      //     // navigate("/mypage");
      //   } else {
      //     Swal.fire(res.data.msg, "비밀번호가 틀렸습니다.", "error");
      //     // navigate("/myconfirm");
      //   }
    });
  };

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>마이페이지</StSignBox>
        <Stlabel>개인정보로 인해 비밀번호를 한번 더 확인합니다.</Stlabel>
        <br></br>
        <br></br>
        <br></br>
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
        <br></br>
        <br></br>
        <StButton
          onClick={() => {
            onCheckPassword(password);

            navigate("/mypage");
          }}
        >
          확인
        </StButton>
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
`;
const StCenterBox = styled.div`
  width: 400px;
  height: 850px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
`;
const StSignBox = styled.div`
  letter-spacing: -0.1em;
  width: 400px;
  height: 80px;
  font-size: 45px;
  margin-bottom: 25px;
  margin-top: 50px;
  display: flex;
  padding-top: 0px;
  border-bottom: 6px solid black;
  justify-content: center;
`;
const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.1em;
`;

const StInput = styled.input`
  width: 300px;
  height: 40px;
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
  cursor: pointer;
  &:hover {
    background-color: #797777;
  }
`;
export default MyConfirm;
