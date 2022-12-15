import styled from "styled-components";
import "./List.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../../redux/modules/counterSlice";
//import { useState } from "react";

const List = ({ recipelist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, imgurl, recipe, id } = recipelist;
  // list id 넘겨오기
  console.log(id);

  const count = useSelector((state) => state.counter.number);
  console.log("count: ", count);

  const onClickHeartHandler = () => {
    dispatch(addNumber(1));
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
              onClick={onClickHeartHandler}
              style={{ color: "#5c94b6", cursor: "pointer" }}
            ></HiHeart>
            <SP>{count}</SP>
          </StDiv>
        </Title>
        <Body>
          <Text style={{ wordBreak: "break-all" }}>{recipe}</Text>
        </Body>
      </Cardcontent>
      <Btn>
        <Stbutton
          borderColor="#ddd"
          onClick={() => {
            navigate(`/lists/${id}`); // [id].배열 보내기
          }}
        >
          View More
        </Stbutton>
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
  text-overflow: ellipsis;
  overflow: scroll;
  word-break: break-word;
  height: 70px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
const Stbutton = styled.div`
  padding: 10px;
  background-color: transparent;
  border: none;
  transition: 0.2s;
  margin-bottom: 0.5rem;
  border-radius: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: rgba(14, 15, 16, 0.1);
    transform: scale();
  }
  font-weight: bold;
  color: #056683;
`;

const StDiv = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

const SP = styled.p`
  margin: 0;
  margin-left: 3px;
`;
//const Href = styled.a`
//text-transform: uppercase;
//color: #3282bc;
//text-decoration: none;
//font-weight: bold;
//`;

export default List;
