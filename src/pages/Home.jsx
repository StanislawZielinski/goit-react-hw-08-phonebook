import React from "react";
import "./Home.css"
import { NavLink } from "react-router-dom";

const Home = () => {


 return (
    <nav className="nav">
        <p className="description">Create your own, personal phonebook!</p>
    <NavLink to="Login">Login</NavLink>
    <NavLink to="/Register">Register</NavLink>
    </nav>
    )
}

export default Home