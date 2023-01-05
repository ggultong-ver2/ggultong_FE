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
        <StButton onClick={() => navigate("/")}>홈으로 돌아가기</StButton>
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
const StImgBox = styled.img`
  margin-top: 30px;
  margin-bottom: 50px;
  width: 90px;
  height: 90px;
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
export default SignComplete;
