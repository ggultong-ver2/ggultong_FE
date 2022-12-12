//import React, { useEffect } from "react";
import styled from "styled-components";

// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// //import { getTodoByID } from "../redux/modules/counter.js";

// const Detail = () => {
//   // const dispatch = useDispatch();
//   const user = useSelector((state) => state.counter.users);
//   const navigate = useNavigate();
//   const param = useParams();
//   // const { id } = useParams();

//   const getid = user.find((user) => user.id === parseInt(param.id));
//   // useEffect(() => {
//   //   dispatch(addButton(user));
//   // }, [dispatch, user]);
const Detailtest = () => {
  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : id랜덤노출함니다 </div>
            <div>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  //navigate("/todolist");
                }}
              >
                수정하기
              </StButton>
              &nbsp;&nbsp;
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  //navigate("/todolist");
                }}
              >
                이전으로
              </StButton>
            </div>
          </StDialogHeader>
          <StTitle>제목</StTitle>
          <StBody>
            <StLeftBox>left</StLeftBox>
            <StRightBox>right</StRightBox>
          </StBody>
        </div>
        <StCommentBox>
          <div>
            <CommentSize>COMMENT</CommentSize>
            <StCommentFunction></StCommentFunction>
            <StCommentButton>등록</StCommentButton>
            <br></br>
            <br></br>

            <CommentMarkBox>
              dddd<br></br>dddd<br></br>dddd<br></br>dddd<br></br>dddd<br></br>
              dddd<br></br>dddd<br></br>dddd<br></br>dddd<br></br>dddd<br></br>
              dddd<br></br>dddd<br></br>dddd<br></br>dddd
            </CommentMarkBox>
          </div>
        </StCommentBox>
      </StDialog>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 5px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c0e9fc;
`;

const StDialog = styled.div`
  width: 1000px;
  height: 760px;
  border: 5px solid grey;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  /* @media screen and (max-width: 768px) {
    width: 95%;
  } */
`;

const StDialogHeader = styled.div`
  margin-top: 2px;
  display: flex;
  border-radius: 20px;
  height: 60px;
  justify-content: space-between;
  background-color: blue;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #c0e9fc;
  border-radius: 12px;
  cursor: pointer;
`;
const StLeftBox = styled.div`
  background: #c0e9fc;
  opacity: 0.7;
  border-radius: 30px;
  float: left;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;
`;

const StRightBox = styled.div`
  background: #c0e9fc;
  opacity: 0.7;
  border-radius: 30px;
  float: right;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;
  /* @media screen and (max-width: 800px) {
    width: 200px;
  } */
`;

const StCommentBox = styled.div`
  margin-top: -50px;
  padding-left: 24px;
  opacity: 0.7;
  background: #c0c0c0;
  border-radius: 30px;
  /* padding: 0px; */
  height: 250px;
  /* @media screen and (max-width: 800px) {
    width: 200px;
  } */
`;

const StCommentFunction = styled.input`
  width: 700px;
  height: 50px;
  font-size: 17px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

const StCommentButton = styled.button`
  position: relative;
  border: none;
  min-width: 150px;
  min-height: 50px;
  margin-left: 55px;
  background: linear-gradient(90deg, #c0e9fc 0%, #6ccefc 100%);
  border-radius: 1000px;
  color: darkslategray;
  cursor: pointer;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:hover::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 8px solid #c0e9fc;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }
`;

const CommentMarkBox = styled.div`
  overflow: scroll;
  width: 700px;
  height: 110px;
  font-size: 17px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentSize = styled.h2`
  font-size: 20px;
`;
export default Detailtest;
