import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURL } from "../../lib/axios";
import { __getWorldCup } from "../../redux/modules/postSlice";
import "../../pages/style.css";

import Ranking from "./Ranking";

function WorldCupGame() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [winners, setWinners] = useState([]);
  const [count, setCount] = useState(1);
  const [rank, setRank] = useState("16강");
  const [visible, setVisible] = useState(false);
  const [displays, setDisplays] = useState([]);
  const dispatch = useDispatch();

  const inputData = useSelector((state) => state.details.details.worldCups);

  const onIncrease = () => {
    setCount((prevCount) => (prevCount === 16 ? 16 : prevCount + 1));
  };

  useEffect(() => {
    dispatch(__getWorldCup());
  }, [dispatch]);

  useEffect(() => {
    if (!inputData) {
      return;
    }
    const array = [...inputData];

    const newdata = array.sort(() => Math.random() - 0.5);

    setFoods(newdata);

    setDisplays([newdata[0], newdata[1]]);
  }, [inputData]);

  const clickHandler = (food) => {
    onIncrease();
    if (count <= 7) {
      setRank("16강");
    } else if (count <= 11) {
      setRank("8강");
    } else if (count <= 13) {
      setRank("준결승");
    } else if (count <= 14) {
      setRank("결승");
    } else if (count <= 15) {
      setRank("우승");
    }
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
    // onRank(); displays[0].id
  };
  if (displays?.length === 0) return;

  return (
    <StContainer>
      <TitleBox>
        <StTitle>꿀통 음식 월드컵</StTitle>
      </TitleBox>
      <TitleBox>
        <StCount>
          {count} / 16 {rank}
        </StCount>
      </TitleBox>
      <div className="worldcup_wrap">
        {displays?.map((rowData) => {
          return (
            <>
              <div key={rowData?.id}>
                <TitleBox>
                  <StName>{rowData?.title}</StName>
                </TitleBox>
                <StFlex
                  key={rowData?.title}
                  onClick={() => clickHandler(rowData)}
                >
                  <StImg src={rowData?.imageUrl} />
                </StFlex>
              </div>
            </>
          );
        })}
      </div>
      <Complete>{visible && <Ranking displays={displays} />}</Complete>
    </StContainer>
  );
}

const StContainer = styled.form`
  width: 100%;
  min-height: 100vh;
  height: 1300px;
  margin: 0 auto;
  background-color: black;
  background-size: cover;
`;

const Container = styled.div`
  width: 1394px;
  height: 800px;
  margin: 0 auto;
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
