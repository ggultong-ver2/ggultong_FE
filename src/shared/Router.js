import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
// import Detailtest from "../components/recipe/Recipe";
// import Board from "../components/board/Board";
// import Edit from "../components/edit/Edit";
// import RecipeList from "../pages/RecipeList";
import Lists from "../components/boards/lists/Lists";
//import Magazine from "../components/boards/magazine/magazine";
// 주석 풀고 사용
import Main from "../pages/Main";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SignAgree from "../pages/SignAgree";
import Detail from "../pages/detail";
import Post from "../pages/post";
import EditPost from "../pages/editPost";

import Tabs from "../pages/Tabs/Tabs";

import SignComplete from "../pages/SignComplete";
import KakaoLogin from "../pages/KakaoLogin";
import MyConfirm from "../pages/MyConfirm";
import MyPage from "../pages/MyPage";
import Category from "../components/category/Category";
import Magazine from "../pages/Magazine";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myconfirm" element={<MyConfirm />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signcomplete" element={<SignComplete />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/agree/" element={<SignAgree />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editpost/:id" element={<EditPost />} />

          <Route path="/tabs" element={<Tabs />} />

          <Route path="/api/user/kakao/callback" element={<KakaoLogin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
