import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorldCupGame from "../components/Game/WorldCupGame";

const GameRank = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <LeftBox>
          <div>
            <StH>내 최종 우승 음식</StH>
            <StimageBox></StimageBox>
            <StP>아침에 먹으면 좋을 계란 후라이 토스트</StP>
            <StContent>
              아침식사로 좋고 간단한 브런치로 좋은 계란후라이토스트 함께
              만들어볼게요~ 식빵과 계란한개를 준비합니다. 후라이팬에 식용유
              1작은술을 두르고 기름이 뜨거워질때쯤 계란을 깨서 올립니다.
              중약불로 해서 노른자가 반숙상태가 될때까지 익혀주면 완성이에요.
              노른자를 완숙으로 하고 싶을때는 흰자가 단단해졌을 때 젓가락으로
              뒤집어서 노른자가 반숙정도될 때까지 익히면 됩니다.
            </StContent>
            <BtnBox>
              <ResetBtn onClick={() => navigate("/gamelist/worldcupgame")}>
                다시 시작하기
              </ResetBtn>
              <ConfirmBtn>게시글 보기</ConfirmBtn>
            </BtnBox>
          </div>
        </LeftBox>
        <RightBox>
          <div>
            <StH>꿀통 음식 월드컵 우승</StH>
            <StBox>
              <MiniImage />
              <MiniContent>
                <StH2>1위 아침에 먹으면 좋을 계란 후라이토스트</StH2>
              </MiniContent>
            </StBox>
            <StBox>
              <MiniImage />
              <MiniContent>
                <StH2>2위 아침에 먹으면 좋을 계란 후라이토스트</StH2>
              </MiniContent>
            </StBox>
            <StBox>
              <MiniImage />
              <MiniContent>
                <StH2>3위 아침에 먹으면 좋을 계란 후라이토스트</StH2>
              </MiniContent>
            </StBox>
            <StBox>
              <MiniImage />
              <MiniContent>
                <StH2>4위 아침에 먹으면 좋을 계란 후라이토스트</StH2>
              </MiniContent>
            </StBox>
            <StBox>
              <MiniImage />
              <MiniContent>
                <StH2>5위 아침에 먹으면 좋을 계란 후라이토스트</StH2>
              </MiniContent>
            </StBox>
          </div>
        </RightBox>
      </div>
    </Container>
  );
};
const StimageBox = styled.img`
  margin-bottom: 30px;
  float: left;
  width: 426px;
  height: 426px;
  background-color: #ffffff;
`;
const MiniContent = styled.div`
  padding-top: 15px;
  margin-left: 20px;
  float: right;
  width: 530px;
  height: 99px;
`;

const MiniImage = styled.img`
  border-radius: 5px;
  outline: none;
  border: 0px;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
`;

const StBox = styled.button`
  border: 0;
  background-color: #292a29;
  color: white;
  margin-top: 50px;
  display: flex;
  width: 632px;
  height: 100px;
  cursor: pointer;

  &:hover {
    background-color: #a0a0a0;
    border-radius: 10px;
  }
`;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 91.85vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-right: 50px;
  float: left;
  width: 486px;
  height: 878px;
  background-color: #292a29;
`;
const RightBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  float: right;
  width: 701px;
  height: 878px;
  background-color: #292a29;
`;

const StH = styled.h2`
  display: flex;
  justify-content: left;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StH2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const StP = styled.p`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const StContent = styled.div`
  width: 426px;
  height: 180px;
  margin-bottom: 30px;
  color: #a0a0a0;
  letter-spacing: -0.05em;
  font-size: 18px;
  font-weight: 400;
  font-family: "Pretendard";
  line-height: 25px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;

  height: 80px;
`;

const ResetBtn = styled.button`
  width: 186px;
  height: 48px;
  margin-right: 15px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #292a29;
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
    background-color: #292a29;
    font-weight: 600;
    color: white;
    border: 1px solid #cbcbcb;
  }
`;
export default GameRank;
