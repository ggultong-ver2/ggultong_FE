import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <StDiv>
      <StH1>당신의 레시피를 추천해주세요!</StH1>
      <StLabel htmlFor="title">Title</StLabel>
      <StInput type="text" name="title" id="title" />
      <StLabel htmlFor="url">Image URL</StLabel>
      <StInput type="text" name="url" id="url" />
      <StLabel htmlFor="recipe">Recipe</StLabel>
      <StTextarea name="recipe" id="recipe" cols="40" rows="10"></StTextarea>
      <div>
        <StButton add>Add Recipe</StButton>
        <Link to={`/lists`}>
          <StButton back>Back</StButton>
        </Link>
      </div>
    </StDiv>
  );
};

const StDiv = styled.div`
  /* background-color: aqua; */
  max-width: 1000px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin-top: -100px;
`;

const StH1 = styled.h1`
  color: #02415c;
  font-size: 50px;
  margin-bottom: 70px;
  /* background-color: #b0c4cc;
  border-radius: 20px; */
`;
const StLabel = styled.label`
  color: #02415c;
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
`;

const StInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
`;

const StTextarea = styled.textarea`
  width: 500px;
  /* height: 35px; */
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
`;

const StButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  margin: 20px;
  margin-top: 30px;
  cursor: pointer;
  ${(props) =>
    props.add &&
    css`
      background-color: #35b2e8;
    `}
  ${(props) =>
    props.back &&
    css`
      background-color: #b9c6cb;
    `}
`;
export default Board;
