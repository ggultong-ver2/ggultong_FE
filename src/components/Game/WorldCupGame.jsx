import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURL } from "../../lib/axios";

import Ranking from "./Ranking";

function WorldCupGame() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [winners, setWinners] = useState([]);
  const [count, setCount] = useState(1);
  const [rank, setRank] = useState(16);
  const [visible, setVisible] = useState(false);
  const [displays, setDisplays] = useState([]);

  const [inputData, setInputData] = useState([
    {
      id: "",
      title: "",
      imageUrl: "",
    },
  ]);
  console.log("inputdata", inputData);

  const onIncrease = () => {
    setCount((prevCount) => (prevCount === 16 ? 16 : prevCount + 1));
  };

  useEffect(async () => {
    {
      // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
      const res = await baseURL.get("/post/getWorldcupImage");
      // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
      console.log("res", res);
      // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
      const _inputData = await res.data.map((rowData) => ({
        id: rowData.id,
        title: rowData.title,
        imageUrl: rowData.imageUrl,
      }));
      console.log("_inputData", _inputData);
      // 선언된 _inputData 를 최초 선언한 inputData 에 concat 으로 추가
      setInputData(inputData.concat(_inputData));
    }
  });

  // useEffect(() => {
  //   inputData.sort(() => Math.random() - 0.5);
  //   setFoods(inputData);
  //   setDisplays([inputData[0], inputData[1]]);
  // }, []);

  const clickHandler = (food) => () => {
    onIncrease();
    setRank(() => (count >= 4 ? 8 : 16));
    setVisible(count >= 15 ? <Ranking /> : null);
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
    // onRank();
  };

  return (
    <form>
      <TitleBox>
        <StTitle>꿀통 음식 월드컵</StTitle>
      </TitleBox>
      <TitleBox>
        <StCount>
          {count} / 16 {rank}강
        </StCount>
      </TitleBox>
      <Container>
        {displays.map((rowData) => {
          console.log("row", rowData);
          return (
            <div>
              <TitleBox>
                <StName>{inputData.title}</StName>
              </TitleBox>
              <StFlex key={inputData.title} onClick={clickHandler}>
                <StImg src={inputData.imageUrl} />
              </StFlex>
            </div>
          );
        })}
      </Container>
      <Complete>{visible && <Ranking />}</Complete>
    </form>
  );
}

const Container = styled.div`
  width: 1394px;
  height: 800px;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Complete = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StFlex = styled.div`
  flex: 1;
  width: 697px;
  overflow: hidden;
  background-color: black;
  position: relative;
`;

const StTitle = styled.h2`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 250px;
  color: white;
  font-size: 22px;
`;

const StCount = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 170px;
  height: 42px;
  font-size: 28px;
  border-radius: 30px;
  align-items: center;
  background-color: #383838;
  display: flex;
  justify-content: center;
  color: white;
`;

const StImg = styled.img`
  width: 696px;
  height: 696px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const StName = styled.div`
  margin-bottom: 20px;
  width: 100%;
  z-index: 3;
  color: #fff;
  bottom: 10%;
  font-size: 18px;
  left: 50%;

  display: flex;
  justify-content: center;
`;
export default WorldCupGame;
