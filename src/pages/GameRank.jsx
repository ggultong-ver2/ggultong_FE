import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorldCupGame from "../components/Game/WorldCupGame";
import { __getRankList, __getWorldCup } from "../redux/modules/postSlice";
import ProgressBar from "../components/Game/ProgressBar";

function GameRank() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useLocation();
  const rankData = useSelector((state) => state.details.details.rankList);
  const [displays, setDisplays] = useState([]);
  console.log("state", state.state);

  useEffect(() => {
    dispatch(__getRankList());

    console.log("res", rankData);
  }, [dispatch]);

  useEffect(() => {
    const array = [rankData];
    console.log("arr", array);

    console.log("newdata[0]", array.slice(0, 2));
    setDisplays(array[0]);
  }, [rankData]);

  return (
    <Container>
      <div>
        <LeftBox>
          <div>
            <StH>내 최종 우승 음식</StH>
            <StimageBox src={state.state.imageUrl} />
            <StP>{state.state.title}</StP>
            <StContent></StContent>
            <BtnBox>
              <ResetBtn onClick={() => navigate("/gamelist/worldcupgame")}>
                다시 시작하기
              </ResetBtn>
              <ConfirmBtn
                onClick={() => {
                  navigate(
                    `/${state.state.category}List/${state.state.category}/detail/${state.state.id}`
                  );
                }}
              >
                게시글 보기
              </ConfirmBtn>
            </BtnBox>
          </div>
        </LeftBox>
        <RightBox>
          <div>
            <StH>꿀통 음식 월드컵 우승</StH>
            {displays.map((rowData, index) => {
              return (
                <div key={rowData.id}>
                  <StBox
                    onClick={() => {
                      navigate(
                        `/${rowData.category}List/${rowData.category}/detail/${rowData.id}`
                      );
                    }}
                  >
                    <MiniImage src={rowData.imageUrl} />
                    <ProgressBox>
                      <div>
                        <StH2>
                          {index + 1}위 {rowData.title}
                        </StH2>
                        <StH3>우승비율&nbsp;&nbsp;{rowData.percent}%</StH3>
                        <ProgressBar rowdata={rowData} />
                      </div>
                    </ProgressBox>
                  </StBox>
                </div>
              );
            })}
          </div>
        </RightBox>
      </div>
    </Container>
  );
}
const StimageBox = styled.img`
  margin-bottom: 30px;

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

const ProgressBox = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  width: 510px;
  height: 120px;
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
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StH2 = styled.h2`
  letter-spacing: 0.1em;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const StH3 = styled.h3`
  margin-bottom: 10px;
  letter-spacing: 0.1em;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
`;

const StP = styled.div`
  display: flex;
  justify-content: center;
  width: 425px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const StContent = styled.div`
  width: 426px;
  height: 80px;
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
