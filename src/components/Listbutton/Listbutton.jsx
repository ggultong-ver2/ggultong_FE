import { useNavigate } from "react-router";
import styled from "styled-components";

const Listbutton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/allList")} className="all">
        전체
      </Button>
      <Button onClick={() => navigate("/roomList")} className="room">
        자취꿀방{" "}
      </Button>
      <Button onClick={() => navigate("/tipList")} className="tip">
        자취꿀팁
      </Button>
      <Button onClick={() => navigate("/mealList")} className="meal">
        자취꿀밥
      </Button>
    </div>
  );
};

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;

export default Listbutton;
