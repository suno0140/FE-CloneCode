import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import OrderList from "../pages/OrderList";
import GithubLogin from "../component/login/sociallogin/components/GithubLogin";
import KakaoLogin from "../component/login/sociallogin/components/KakaoLogin";
import GoogleLogin from "../component/login/sociallogin/components/GoogleLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login">
            <Route index element={<Login />} />
            <Route path="github" element={<GithubLogin />} />
            <Route path="kakao" element={<KakaoLogin />} />
            <Route path="google" element={<GoogleLogin />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
