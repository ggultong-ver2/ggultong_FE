import Lists from "../../components/boards/lists/Lists";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MealList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapall>
        <Buttons>
          <Button1
            onClick={() => window.location.replace("/drinkList")}
            className="drink"
          >
            혼술
          </Button1>
          <Button2
            onClick={() => window.location.replace("/mealList")}
            className="meal"
          >
            혼밥
          </Button2>
          <Button3
            onClick={() => window.location.replace("/recycleList")}
            className="recycle"
          >
            리사이꿀
          </Button3>
        </Buttons>
        <Wrap>
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
        </Wrap>
      </Wrapall>
    </div>
  );
};

const Wrapall = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 2700px;
  margin: auto;
  padding: 20px;
  font-family: "Pretendard";
`;
const Wrap = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;
const Buttons = styled.div``;
const Button2 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
`;
const Button3 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;
const Button1 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;

export default MealList;
