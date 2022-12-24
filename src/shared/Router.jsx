import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
