import Listbutton from "../../components/Listbutton/Listbutton";
import Lists from "../../components/boards/lists/Lists";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RoomList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapall>
        <Buttons>
          <Button1
            onClick={() => window.location.replace("/allList")}
            className="all"
          >
            전체
          </Button1>
          <Button2
            onClick={() => window.location.replace("/roomList")}
            className="room"
          >
            자취꿀방
          </Button2>
          <Button3
            onClick={() => window.location.replace("/tipList")}
            className="tip"
          >
            자취꿀팁
          </Button3>
          <Button4
            onClick={() => window.location.replace("/mealList")}
            className="meal"
          >
            자취꿀밥
          </Button4>
        </Buttons>
        <Wrap>
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
  height: 2200px;
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
const Button4 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;

export default RoomList;
