import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
// import PropTypes from 'prop-types'

const NavBar = props => {
  return (
    <nav className='navBar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Register">Register</NavLink>
    </nav>
  )
}

// NavBar.propTypes = {

// }

export default NavBar
