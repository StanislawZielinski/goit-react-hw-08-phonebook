import React from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
// import PropTypes from 'prop-types'

import "./Register.css";

const Login = props => {
    return (
        <div className='login-wrapper'>
          <LoginForm />
        </div>
      );
}

// Register.propTypes = {

// }

export default Login