import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
// import { Link } from "react-router-dom";
import { apis } from "../../lib/axios";

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [editRecipe, setEditRecipe] = useState({});

  const [recipes, setRecipes] = useState([]);
  console.log("recipes: ", recipes);

  /*
  // 코드복사 12~15까지 기본 axios 버전
  const fetchRecipes = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/recipes/${param.id}`
    );
    setRecipes(data);
  };
  */

  /*
  // id값에 따라 불러오기
  useEffect(() => {
    const fetchRecipes = async () => {
      await axios
        .get(`http://localhost:3000/recipes/${param.id}`)
        .then(function (res) {
          console.log("res: ", res.data);
          setRecipes(res.data);
        })
        .catch(function (error) {
          console.log("error: ", error);
        });
    };
    fetchRecipes();
  }, [param.id]);
  */

  // id값에 따라 불러오기
  useEffect(() => {
    apis
      .getIdRecipes(param.id)
      .then((res) => {
        const get = res.data;
        setRecipes(get);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);

  // 수정하기 핸들러 apis instance 버전
  const onEditRecipe = (id, recipe) => {
    apis
      .editRecipes(id, recipe)
      .then((res) => {
        //   window.location.href = "/lists";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
  // axios 수정하기 버전
  const onSubmitHandler = (edit) => {
    axios
      .patch(`http://localhost:3000/recipes/${param.id}`, edit)
      .then((res) => {
        console.log("res: ", res);
        console.log("editRecipe: ", editRecipe);
        window.location.href = "/lists";
        // fetchRecipes()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  */

  /*
    // setRecipes([...recipes, recipe]);
    try {
      // 새로고침 되었을 때 경로 이동
      window.location.href = "/lists"; // 수정된 페이지로 이동
    } catch (error) {
      console.log(error);
    }
  };
*/

  return (
    <StForm>
      <StH1>당신의 레시피를 추천해주세요!</StH1>
      <StLabel htmlFor="title">Title</StLabel>
      <StInput
        type="text"
        name="title"
        id="title"
        defaultValue={recipes.title ? recipes.title : ""}
        // value={recipes.title || ""}
        onChange={(ev) => {
          const { value } = ev.target;
          setEditRecipe({
            ...editRecipe,
            title: value,
          });
        }}
      />
      <StLabel htmlFor="url">Image URL</StLabel>
      <StInput
        type="text"
        name="url"
        id="url"
        // defalutvalue={recipes.imgurl || ""}
        defaultValue={recipes.imgurl ? recipes.imgurl : ""}
        onChange={(ev) => {
          const { value } = ev.target;
          setEditRecipe({
            ...editRecipe,
            imgurl: value,
          });
        }}
      />
      <StLabel htmlFor="recipe">Recipe</StLabel>
      <StTextarea
        name="recipe"
        id="recipe"
        // value={recipes.recipe}
        defaultValue={recipes.recipe ? recipes.recipe : ""}
        cols="40"
        rows="10"
        onChange={(ev) => {
          const { value } = ev.target;
          setEditRecipe({
            ...editRecipe,
            recipe: value,
          });
        }}
      ></StTextarea>
      <div>
        <StButton
          add
          onClick={(e) => {
            e.preventDefault();
            // onSubmitHandler(editRecipe);
            onEditRecipe(param.id, editRecipe);
            navigate("/lists");
          }}
        >
          수정하기
        </StButton>
        {/* <Link to={`/lists`}> */}
        <StButton
          back
          onClick={() => {
            navigate("/lists");
          }}
        >
          Back
        </StButton>
        {/* </Link> */}
      </div>
      {/* <div>
        <div>
          <p>
            ID: <br />
            {recipes.id}
          </p>
          <h1>
            Title: <br />
            {recipes.title}
          </h1>
          <h3>
            Recipe: <br />
            {recipes.recipe}
          </h3>
          <img src={recipes.imgurl} alt="이미지" />
        </div>
      </div> */}
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
export default Edit;
