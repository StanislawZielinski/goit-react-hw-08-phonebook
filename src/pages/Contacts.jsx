import Phonebook from '../components/phonebook/Phonebook';
import React from 'react';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types'

const Contacts = props => {
  // const token = useSelector(state=>state.token.token);
  // console.log(token);
  const user = useSelector(state=>state);
  console.log(user);
  // const isLogged = useSelector(state=>state.isLogged.isLogged);
  // console.log(isLogged);
  return (
    <div>
      <Phonebook/>
    </div>
  )
}

// Contacts.propTypes = {

// }

export default Contacts
