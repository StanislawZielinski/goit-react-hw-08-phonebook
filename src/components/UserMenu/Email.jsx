import React from 'react'
import { useSelector } from 'react-redux';

const Email = () => {
    const email = useSelector(state=>state.user.email);
  return (
    <div style={{fontSize:"18px"}}>
      Hello <span style={{color:"red"}}>{email}</span>
    </div>
  )
}

export default Email