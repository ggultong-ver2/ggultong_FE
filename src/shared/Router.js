import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "../pages/Home";
// import Layout from "../components/layout/Layout";
// import Detailtest from "../components/recipe/Recipe";
// import Board from "../components/board/Board";
// import Edit from "../components/edit/Edit";
// import RecipeList from "../pages/RecipeList";
// 주석 풀고 사용
import Main from "../pages/Main";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SignAgree from "../pages/SignAgree";
import Detail from "../pages/detail";
import Post from "../pages/post";
import EditPost from "../pages/editPost";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="board" element={<Board />} /> */}
        {/* <Route path="board/:id" element={<Edit />} /> */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agree/" element={<SignAgree />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default Router;
