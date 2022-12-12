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
            <div>ID : id랜덤노출 </div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                //navigate("/todolist");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>제목</StTitle>
          <StBody>
            <StLeftBox>왼쪽</StLeftBox>
            <StRightBox>오른쪽</StRightBox>
          </StBody>
        </div>
        <div>
          <CommentBox>댓글</CommentBox>
        </div>
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
  height: 800px;
  border: 5px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
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
  background: red;
  float: left;
  height: 400px;
  width: 475px;
`;

const StRightBox = styled.div`
  background: green;
  float: right;
  height: 400px;
  width: 475px;
`;

const CommentBox = styled.div`
  background: blue;
  padding: 0 24px;
  height: 230px;
`;
export default Detailtest;
