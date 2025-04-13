import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
