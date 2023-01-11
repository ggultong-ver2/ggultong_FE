import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getIdPost, __deletePost } from "../redux/modules/postSlice";
import Likes from "../components/like/Likes";
import axios from "axios";

const Detail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.details.details);
  console.log("details:", details);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);
  const param = useParams();

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  const onClickDeletePostHandler = (id) => {
    dispatch(__deletePost(id));
  };

  const onClickEditPostHandler = () => {
    navigate(`/editpost/${id}`);
  };

  return (
    <div>
      <StDetail>
        <StTitle>{details?.title}</StTitle>
        <StCategory>카테고리:{details?.category}</StCategory>
        <StNickname>{details?.nickname} 님</StNickname>
        <StFile src={details?.imageFiles[0]} />
        <StContent>{details?.content}</StContent>
        <StFiles src={details?.imageFiles[1]} />
        <Date>{details?.createdAt}</Date>
        <Btns>
          <StEditBtn onClick={onClickEditPostHandler}>수정</StEditBtn>
          <StDeleteBtn onClick={onClickDeletePostHandler}>삭제</StDeleteBtn>
        </Btns>
        <Likes />
      </StDetail>
    </div>
  );
};

const StDetail = styled.div`
  //border: 1px solid red;
  width: 800px;
  height: 1800px;
  margin: auto;
  margin-top: 30px;
`;
const StTitle = styled.p`
  //border: 1px solid blue;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
const StCategory = styled.div`
  font-size: 30px;
  text-align: center;
`;
const StNickname = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;
const StFile = styled.div`
  //border: 1px solid green;
  height: 500px;
  width: 800px;
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  //border: 1px solid yellow;
  height: 350px;
  margin-top: 30px;
  font-size: 18px; ;
`;
const StFiles = styled.img`
  height: 350px;
  width: 800px;
  background-color: #d9d9d9;
`;
const Btns = styled.div`
  margin-left: 270px;
  margin-top: 30px;
`;
const StEditBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
  margin-right: 20px;
`;
const StDeleteBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
`;
const Date = styled.p``;

export default Detail;
