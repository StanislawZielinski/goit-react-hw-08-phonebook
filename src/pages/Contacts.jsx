import Phonebook from '../components/phonebook/Phonebook';
import React from 'react';
import { useSelector } from 'react-redux';


// import PropTypes from 'prop-types'

const Contacts = props => {
  const token = useSelector(state=>state.token);
  console.log(token);
  const isLogged = useSelector(state=>state.isLogged);
  console.log(isLogged);
  const user = useSelector(state=>state.user);
  console.log(user);
  return (
    <div>
      <Phonebook/>
    </div>
  )
}

// Contacts.propTypes = {

// }

export default Contacts
