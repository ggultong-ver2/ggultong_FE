import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
// import Detailtest from "../components/recipe/Recipe";
// import Board from "../components/board/Board";
// import Edit from "../components/edit/Edit";
// import RecipeList from "../pages/RecipeList";
//import Magazine from "../components/boards/magazine/magazine";
// 주석 풀고 사용
import Main from "../pages/Main";
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
import MealList from "../pages/List/mealList";
import DrinkList from "../pages/List/drinkList";
import RecycleList from "../pages/List/recycleList";
import Editor from "../components/editor/Editor";
import Pwfind from "../pages/Pwfind";
import Idfind from "../pages/Idfind";
import SocialNick from "../pages/SocialNick";
import MyPwChange from "../pages/MyPwChange";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          <Route path="myconfirm/pwchange" element={<MyPwChange />} />
          <Route path="/myconfirm/" element={<MyConfirm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signcomplete" element={<SignComplete />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/agree/" element={<SignAgree />} />
          <Route path="drinkList/:category/detail/:id" element={<Detail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/pwfind" element={<Pwfind />} />
          <Route path="/idfind" element={<Idfind />} />
          <Route path="/editpost/:id" element={<EditPost />} />
          <Route path="/user/kakao/callback" element={<SocialLogin />} />
          <Route path="/mypage" element={<MyTab />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/socialnick" element={<SocialNick />} />

          <Route path="/drinkList/:id" element={<DrinkList />} />
          <Route path="/mealList/:id" element={<MealList />} />
          <Route path="/recycleList/:id" element={<RecycleList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
