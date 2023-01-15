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
import SignComplete from "../pages/SignComplete";
import MyConfirm from "../pages/MyConfirm";
// import MyPage from "../pages/MyPage";
import Home from "../pages/Home";
import MyTab from "../pages/Tabs/MyTab";
import Search from "../components/search/Search";
import SocialLogin from "../pages/SocialLogin";
import SignNick from "../pages/SignNick";

import AllList from "../pages/List/AllList";
import MealList from "../pages/List/mealList";
import TipList from "../pages/List/tipList";
import RoomList from "../pages/List/roomList";
import Listbutton from "../components/Listbutton/Listbutton";
import Editor from "../components/editor/Editor";
import PostEditor from "../pages/postEditor";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          <Route path="/myconfirm/" element={<MyConfirm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signcomplete" element={<SignComplete />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/agree/" element={<SignAgree />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/posteditor" element={<PostEditor />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/editpost/:id" element={<EditPost />} />
          <Route path="/user/kakao/callback" element={<SocialLogin />} />
          <Route path="/mypage" element={<MyTab />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/signnick" element={<SignNick />} />

          <Route path="/allList" element={<AllList />} />
          <Route path="/mealList" element={<MealList />} />
          <Route path="/tipList" element={<TipList />} />
          <Route path="/roomList" element={<RoomList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
