import styled from "styled-components";
import Lists from "../../components/boards/lists/Lists";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getCategoryPost } from "../../redux/modules/postSlice";

const DrinkList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, pageNum } = useParams();

  useEffect(() => {
    dispatch(__getCategoryPost(category));
  }, [dispatch]);

  const categoryPosts = useSelector((state) => state);
  console.log("categoryPosts:", categoryPosts);

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
const Button1 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
`;
const Button2 = styled.button`
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
export default DrinkList;
