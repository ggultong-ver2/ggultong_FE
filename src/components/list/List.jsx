import styled from "styled-components";
import "./List.css";
import { useNavigate } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../../redux/modules/counterSlice";
//import { useState } from "react";
=======
import { apis } from "../../lib/axios";
import { useState } from "react";
import Button from "../button/Button";
>>>>>>> 03ef0d0afd197416c2c270996245daec8df818b1

const List = ({ recipelist }) => {
  const navigate = useNavigate();
  const { title, imgurl, recipe, id, count } = recipelist;
  // list id 넘겨오기
  console.log(id);
  const [like, setLike] = useState(count);

  // const count = useSelector((state) => state.counter.number);
  console.log("count: ", count);
  // console.log("like: ", like);

  const onClickHeartHandler = (id) => {
    // setLike(like + 1);
    console.log("like:", like);
    const recipeLike = { title, imgurl, recipe, count: like };
    apis
      .editRecipes(id, recipeLike)
      .then((res) => {
        console.log(res);
        setLike(like + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Cardcontainer>
      <div>
        <Imagecontainer src={imgurl} alt="" />
      </div>
      <Cardcontent>
        <Title>
          <h3>{title}</h3>
          <StDiv>
            <HiHeart
              onClick={() => {
                onClickHeartHandler(id);
              }}
              style={{ color: "#5c94b6", cursor: "pointer" }}
            ></HiHeart>
            <SP>{like}</SP>
          </StDiv>
        </Title>
        <Body>
          <Text style={{ wordBreak: "break-all" }}>{recipe}</Text>
        </Body>
      </Cardcontent>
      <Btn>
        <Button
          view
          borderColor="#ddd"
          onClick={() => {
            navigate(`/lists/${id}`); // [id].배열 보내기
          }}
        >
          View More
        </Button>
      </Btn>
    </Cardcontainer>
  );
};

const Cardcontainer = styled.div`
  width: 250px;
  height: 400px;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in;
  &:hover {
    transform: scale(1, 1);
    box-shadow: 0px 0px 15px 0px;
  }
  margin-top: 70px;
  margin-left: 10px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #ffffffd0;
`;
const Imagecontainer = styled.img`
  overflow: hidden;
  height: 200px;
  width: 250px;
  border-top-left-radius: 30px;
`;
const Cardcontent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
`;
const Title = styled.div`
  color: #056683;
  text-align: center;
`;
const Body = styled.div`
  color: #056683;
`;
const Text = styled.p`
  &::-webkit-scrollbar {
    display: none;
  }
  text-overflow: ellipsis;
  overflow: scroll;
  word-break: break-word;
  height: 90px;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

export default List;
