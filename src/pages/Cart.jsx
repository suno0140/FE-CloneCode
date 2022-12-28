import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartPage from "../component/cart/screen/CartScreen";
import { __getCart } from "../redux/modules/cartSlice";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCart());
  }, [dispatch]);

  return <CartPage />;
};

export default Login;
