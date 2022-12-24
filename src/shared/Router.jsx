import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product/list" element={<ProductList />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
