import { isVisible } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ranking from "./Ranking";

function WorldCupGame() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [count, setCount] = useState(1);
  const [rank, setRank] = useState("16강");
  const [visible, setVisible] = useState(false);

  const onIncrease = () => {
    setCount((prevCount) => (prevCount === 16 ? 16 : prevCount + 1));
  };

  //   const onRank = () => {
  //     setRank((prevRank) => (prevRank === 4 ? 16 : 8));
  //     // setRank((prevRank) => (prevRank >= ? 4 : 8));
  //   };

  const items = [
    {
      name: "국밥",
      src: require("../../assets/images/bab.jpg"),
    },
    {
      name: "햄버거",
      src: require("../../assets/images/burger.jpg"),
    },
    {
      name: "피자",
      src: require("../../assets/images/pizza.jpg"),
    },
    {
      name: "초밥",
      src: require("../../assets/images/sushi.jpg"),
    },
    {
      name: "국밥",
      src: require("../../assets/images/bab.jpg"),
    },
    {
      name: "햄버거",
      src: require("../../assets/images/burger.jpg"),
    },
    {
      name: "피자",
      src: require("../../assets/images/pizza.jpg"),
    },
    {
      name: "초밥",
      src: require("../../assets/images/sushi.jpg"),
    },
    {
      name: "국밥",
      src: require("../../assets/images/bab.jpg"),
    },
    {
      name: "햄버거",
      src: require("../../assets/images/burger.jpg"),
    },
    {
      name: "피자",
      src: require("../../assets/images/pizza.jpg"),
    },
    {
      name: "초밥",
      src: require("../../assets/images/sushi.jpg"),
    },
    {
      name: "국밥",
      src: require("../../assets/images/bab.jpg"),
    },
    {
      name: "햄버거",
      src: require("../../assets/images/burger.jpg"),
    },
    {
      name: "피자",
      src: require("../../assets/images/pizza.jpg"),
    },
    {
      name: "초밥",
      src: require("../../assets/images/sushi.jpg"),
    },
  ];
  console.log(items.length);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (food) => () => {
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
    // onRank();
  };

  return (
    <form>
      <TitleBox>
        <StTitle>꿀통 음식 월드컵</StTitle>
      </TitleBox>
      <TitleBox>
        <StCount>
          {count} / 16 {rank}
        </StCount>
      </TitleBox>
      <Container>
        {displays.map((e) => {
          return (
            <div>
              <TitleBox>
                <StName>{e.name}</StName>
              </TitleBox>
              <StFlex key={e.name} onClick={clickHandler(e)}>
                <StImg src={e.src} />
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
