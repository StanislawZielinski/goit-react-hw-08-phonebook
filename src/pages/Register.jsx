import React from 'react';
import { RegisterForm } from 'components/Register/RegisterForm';
// import PropTypes from 'prop-types'

import "./Register.css";

const Register = props => {
    return (
        <div className='login-wrapper'>
          <RegisterForm />
        </div>
      );
}

// Register.propTypes = {

// }

export default Register
