//import React, { useEffect } from "react";
import axios from "axios";
import { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipe = () => {
  //////////////레시피///////////////////
  const navigate = useNavigate();
  const param = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const getRecipeContent = recipes.filter(
    (recipes) => recipes.id === parseInt(param.id)
  );
  console.log(recipes, param.id);
  //////////////리뷰///////////////
  const [review, setReview] = useState({
    title: "",
  });
  const [recipesx, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const { data } = await axios.get(
      `http://localhost:3005/recipes/${param.id}`
    );
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  console.log(recipesx);
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get("http://localhost:3005/reviews");
    setReviews(data);
  };
  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3005/reviews", review);
    setReviews([...reviews, review]);
  };

  const onClickDeleteButtonHandler = (reviewId) => {
    axios.delete(`http://localhost:3005/reviews/${reviewId}`);
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  /////////////////////////////////////
  return (
    <StDiv background>
      <StContainer>
        <StDialog>
          <div>
            <StDialogHeader>
              <div>ID :{recipesx.id}</div>
              <div>
                <StButton
                  borderColor="#ddd"
                  onClick={() => {
                    //navigate("/lists");
                  }}
                >
                  수정하기
                </StButton>
                &nbsp;&nbsp;
                <StButton
                  borderColor="#ddd"
                  onClick={() => {
                    navigate("/lists");
                  }}
                >
                  이전으로
                </StButton>
              </div>
            </StDialogHeader>
            <StTitle>{recipesx.title}</StTitle>

            <StBody>
              <StLeftBox src={recipesx.imgurl}></StLeftBox>
              <StRightBox>
                <StP>{recipesx.recipe}</StP>
              </StRightBox>
            </StBody>
          </div>

          <StCommentBox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitHandler(review);
              }}
            >
              <CommentSize>COMMENT</CommentSize>
              <StCommentFunction
                type="text"
                placeholder="코멘트를 입력하세요."
                onChange={(ev) => {
                  const { value } = ev.target;
                  setReview({
                    ...review,
                    title: value,
                  });
                }}
              />
              <StCommentButton>등록</StCommentButton>
            </form>

            <CommentMarkBox>
              {reviews?.map((review) => (
                <div key={review.id}>
                  {review.id} :{review.title}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    onClick={() => onClickDeleteButtonHandler(review.id)}
                  >
                    &nbsp;삭제하기&nbsp;
                  </button>
                </div>
              ))}
            </CommentMarkBox>
          </StCommentBox>
        </StDialog>
      </StContainer>
    </StDiv>
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
const StLeftBox = styled.img`
  background: #c0e9fc;
  border-radius: 30px;
  float: left;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;
`;

const StRightBox = styled.div`
  background: #c0e9fc;
  overflow: scroll;
  opacity: 1;
  border-radius: 30px;
  float: right;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;

  //padding-top: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* @media screen and (max-width: 800px) {
    width: 200px;
  } */
`;

const StCommentBox = styled.div`
  margin-top: -40px;
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
  margin-top: 10px;
  overflow: scroll;
  width: 700px;
  height: 120px;
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

const StDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

const StP = styled.p`
  padding: 8px;
`;
export default Recipe;
