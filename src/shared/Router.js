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
import Main from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SignAgree from "../pages/SignAgree";
import Detail from "../pages/detail";
import Post from "../pages/post";
import EditPost from "../pages/editPost";
import DetailTab from "../pages/DetailTab/DetailTab";

import SignComplete from "../pages/SignComplete";
import KakaoLogin from "../pages/KakaoLogin";
import MyConfirm from "../pages/MyConfirm";
// import MyPage from "../pages/MyPage";
import Home from "../pages/Home";
import MyTab from "../pages/Tabs/MyTab";
import Search from "../components/search/Search";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          <Route path="/myconfirm" element={<MyConfirm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signcomplete" element={<SignComplete />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/agree/" element={<SignAgree />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editpost/:id" element={<EditPost />} />
          <Route path="/api/user/kakao/callback" element={<KakaoLogin />} />
          <Route path="/mypage" element={<MyTab />} />
          <Route path="/search/:keyword" element={<Search />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
