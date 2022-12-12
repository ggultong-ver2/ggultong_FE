import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Board = () => {
  const [recipe, setRecipe] = useState({ title: "", imgurl: "", recipe: "" });
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  // 코드복사 12~15까지
  const fetchRecipes = async () => {
    const { data } = await axios.get("http://localhost:3005/recipes");
    setRecipes(data);
  };

  const onSubmitHandler = (recipe) => {
    axios.post("http://localhost:3005/recipes", recipe);
    setRecipes([...recipes, recipe]);
    try {
      // 새로고침 되었을 때 경로 이동
      window.location.href = "/lists";
    } catch (error) {
      console.log(error);
    }
  };

  // 코드복사 26~27까지
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(recipe);
      }}
    >
      <StH1>당신의 레시피를 추천해주세요!</StH1>
      <StLabel htmlFor="title">Title</StLabel>
      <StInput
        type="text"
        name="title"
        id="title"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            title: value,
          });
        }}
      />
      <StLabel htmlFor="url">Image URL</StLabel>
      <StInput
        type="text"
        name="url"
        id="url"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            imgurl: value,
          });
        }}
      />
      <StLabel htmlFor="recipe">Recipe</StLabel>
      <StTextarea
        name="recipe"
        id="recipe"
        cols="40"
        rows="10"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            recipe: value,
          });
        }}
      ></StTextarea>
      <div>
        <StButton add>Add Recipe</StButton>
        <Link to={`/lists`}>
          <StButton back>Back</StButton>
        </Link>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.id}</p>
            <h1>{recipe.title}</h1>
            <h3>{recipe.recipe}</h3>
            <img src={recipe.imgurl} alt="이미지" />
          </div>
        ))}
      </div>
    </StForm>
  );
};

const StForm = styled.form`
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
  height: 30px;
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;
`;

const StTextarea = styled.textarea`
  width: 500px;
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;
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
