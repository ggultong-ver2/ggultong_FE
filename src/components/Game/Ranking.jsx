import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Ranking() {
  const navigate = useNavigate();
  return (
    <div>
      <WinnerBox>꿀통 음식 월드컵 우승!</WinnerBox>
      <StCenterBox>
        <BtnBox>
          <ResetBtn
            onClick={() => window.location.replace("/gamelist/worldcupgame")}
          >
            다시 시작하기
          </ResetBtn>
          <ConfirmBtn>랭킹보기</ConfirmBtn>
        </BtnBox>
      </StCenterBox>
    </div>
  );
}

const StCenterBox = styled.div`
  font-family: "Pretendard";
  width: 1394px;
  height: 80px;
  border: 0;
  border-radius: 1px;
  display: flex;
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  width: 1394px;
  height: 80px;
`;

const WinnerBox = styled.div`
  letter-spacing: 0.1em;
  display: flex;
  font-size: 22px;
  font-family: "Pretendard";
  justify-content: center;
  width: 1394px;
  height: 30px;
`;
const ResetBtn = styled.button`
  width: 186px;
  height: 48px;
  margin-right: 10px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: black;
  border: 1px solid #ffffff;
  border-radius: 6px;
  font-family: "Pretendard";
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #a0a0a0;
    font-weight: 600;
  }
`;

const ConfirmBtn = styled.button`
  width: 186px;
  height: 48px;
  font-size: 16px;
  color: black;
  font-weight: 600;
  background-color: #f4c748;
  border: 0;
  border-radius: 6px;
  font-family: "Pretendard";
  cursor: pointer;
  &:hover {
    color: black;
    background-color: black;
    font-weight: 600;
    color: white;
    border: 1px solid #cbcbcb;
  }
`;
export default Ranking;
