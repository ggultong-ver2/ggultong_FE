import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import checkbox from "../assets/images/checkbox.png";

function SignComplete() {
  const navigate = useNavigate();
  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>회원가입</StSignBox>
        <Stlabel>꿀통의 회원이 되신걸 축하해요!</Stlabel>
        <StImgBox src={checkbox} />
        <StButton onClick={() => navigate("/login")}>
          로그인창으로 돌아가기
        </StButton>
      </StCenterBox>
    </StContainer>
  );
}
const StContainer = styled.form`
  font-family: "Pretendard";
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  background-size: cover;
  margin: 100px 0;
`;
const StCenterBox = styled.div`
  font-family: "Pretendard";
  width: 400px;
  height: 850px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
`;
const StSignBox = styled.div`
  font-family: "Pretendard";
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
  font-family: "Pretendard";
`;
const StImgBox = styled.img`
  margin-top: 30px;
  margin-bottom: 50px;
  width: 90px;
  height: 90px;
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
  font-family: "Pretendard";
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FFD86A;
  }
`;
export default SignComplete;
