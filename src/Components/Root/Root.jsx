import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Home></Home>
      {isNavigating && <p>Loading....</p>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
