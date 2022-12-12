import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
// 주석 풀고 사용
// import RecipeList from "../pages/RecipeList";
// import Recipe from "../components/recipe/Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 주석 풀고 사용 */}
          <Route path="lists" element={<RecipeList />} />
          <Route path="lists/:id" element={<Recipe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
