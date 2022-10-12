import NavBar from "components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer"
import "./SharedLayout.css";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div className="wrapper">
      <h1 className="title">PHONEBOOK</h1>
        <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        <Footer/>
    </div>

  );
};

export default SharedLayout