import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer"
import "./SharedLayout.css";

const SharedLayout = () => {
  return (
    <div className="wrapper">
        <Outlet />
        <Footer/>
    </div>

  );
};

export default SharedLayout