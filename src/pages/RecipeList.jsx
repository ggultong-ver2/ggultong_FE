import styled from "styled-components";
import List from "../components/list/List";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  const fetchRecipes = async () => {
    const { data } = await axios.get("http://localhost:3005/recipes");
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <Stimg>
        <Wrapimg>
          <Title>
            <h1> Recipe Community</h1>
          </Title>
          <Nbutton>
            <Link to={`/board`}>
              <Newbutton>new Post</Newbutton>
            </Link>
          </Nbutton>

          <Card>
            {recipes.map((recipe) => (
              <List recipelist={recipe} />
            ))}
          </Card>
        </Wrapimg>
      </Stimg>
    </div>
  );
};

const Title = styled.div`
  color: #056683;
  text-align: center;
  font-family: "Kalam", cursive;
`;
const Nbutton = styled.div`
  margin-bottom: -40px;
  text-align: right;
`;
const Newbutton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #3282bc;
  color: white;
  border: 0px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(42, 52, 75, 0.658);
  font-weight: bold;
  &:hover {
    background: rgba(184, 217, 254, 0.366);
    transform: scale();
    cursor: pointer;
    color: #364d8f;
    font-weight: bold;
  }
  font-family: "Nanum Gothic", sans-serif;
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: "Nanum Gothic", sans-serif;
`;
const Wrapimg = styled.div`
  width: 1105px;
  min-height: 400px;
`;
const Stimg = styled.div`
  background-image: url("https://cdn.discordapp.com/attachments/1047386886269829182/1051905388976550018/pngegg.png");
  background-repeat: no-repeat;
  background-size: fill;
  background-position: center;
`;
export default RecipeList;
