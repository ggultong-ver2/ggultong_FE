import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import __pwcheck from "../redux/modules/checkPwSlice copy";
import { useInput } from "../lib/utils/useInput";

function MyPage() {
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  const onCheckPassword = (password) => {
    console.log("password--->", password);
    __pwcheck(password).then((res) => {
      console.log(password);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "확인되었습니다.", "success");
        // navigate("/mypage");
      } else {
        Swal.fire(res.data.msg, "비밀번호가 틀렸습니다.", "error");
        // navigate("/myconfirm");
      }
    });
  };

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>마이페이지</StSignBox>
        <Stlabel>회원정보 수정</Stlabel>
        <br></br>
        <br></br>
        <br></br>
        <Stdiv>
          <div>
            <p>아이디</p>
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
          </div>
          <br></br>
          <br></br>
          <StButton
            onClick={() => {
              onCheckPassword(password);
            }}
          >
            확인
          </StButton>
        </Stdiv>
        <br></br>
        <br></br>
      </StCenterBox>
    </StContainer>
  );
}
const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  background-color: white;
  align-items: center;
  background-size: cover;
`;
const StCenterBox = styled.div`
  width: 100%;
  background-color: pink;
  height: 900px;

  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
`;
const Stdiv = styled.div`
  width: 100px;
  padding-left: 30px;
`;
const StSignBox = styled.div`
  letter-spacing: -0.1em;
  width: 100%;
  height: 80px;
  font-size: 45px;
  margin-bottom: 25px;
  margin-top: 20px;
  display: flex;
  border-bottom: 6px solid black;
  justify-content: center;
`;
const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.1em;
  display: flex;
  justify-content: center;
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
export default MyPage;
