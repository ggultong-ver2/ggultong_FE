import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/post";
import Home from "../pages/home";
import Detail from "../pages/detail";
// import Layout from "../components/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="post" element={<Post />} />
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default Router;
