import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getIdPost, __deletePost } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.details.details);
  console.log("details:", details);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    dispatch(__getIdPost(id));
  }, [dispatch, id]);

  const onClickDeletePostHandler = () => {
    dispatch(__deletePost(id));
  };

  const onClickEditPostHandler = () => {
    navigate(`/editpost/${id}`);
  };

  return (
    <div>
      <StDetail>
        <StTitle>제목:{details?.title}</StTitle>
        <StCategory>카테고리:{details?.category}</StCategory>
        <StFile>파일:{details?.file}</StFile>
        <StContent>내용:{details?.content}</StContent>
        <Btns>
          <StEditBtn onClick={onClickEditPostHandler}>수정</StEditBtn>
          <StDeleteBtn onClick={onClickDeletePostHandler}>삭제</StDeleteBtn>
        </Btns>
      </StDetail>
    </div>
  );
};

const StDetail = styled.div`
  border: 1px solid red;
  width: 1000px;
  height: 1200px;
`;
const StTitle = styled.p`
  border: 1px solid blue;
  height: 80px;
  font-size: 50px;
  text-align: center;
`;
const StCategory = styled.div`
  font-size: 30px;
  text-align: center;
`;
const StFile = styled.div`
  border: 1px solid green;
  height: 600px;
`;
const StContent = styled.div`
  border: 1px solid yellow;
  height: 400px;
`;
const Btns = styled.div``;
const StEditBtn = styled.button`
  height: 80px;
  width: 150px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
  margin-right: 20px;
`;
const StDeleteBtn = styled.button`
  height: 80px;
  width: 150px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
`;

export default Detail;
