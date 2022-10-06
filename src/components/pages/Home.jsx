import React from "react";
import "./Home.css"
import { NavLink } from "react-router-dom";

const Home = () => {


 return (
    <nav className="nav">
    <NavLink to="Login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
    </nav>
    )
}

export default Home