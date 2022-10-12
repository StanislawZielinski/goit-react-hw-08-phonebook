import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import { useSelector } from 'react-redux';
import Email from 'components/UserMenu/Email';
import LogOut from 'components/UserMenu/LogOut';
// import PropTypes from 'prop-types'

const NavBar = props => {
const isLogged = useSelector(state=>state.isLogged.isLogged);
  return (
    <nav className='navBar'>
      {!isLogged && (<NavLink to="/">Home</NavLink>)}
      {!isLogged ? (<NavLink to="/Login">Login</NavLink>) : (<Email/>)}
      {!isLogged ? (<NavLink to="/Register">Register</NavLink>) : (<LogOut/>)}
    </nav>
  )
}

// NavBar.propTypes = {

// }

export default NavBar
