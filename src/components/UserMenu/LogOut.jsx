import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { addUser } from 'redux/userSlice';
import {addToken} from 'redux/tokenSlice';
import {logIn} from '../../redux/isLoggedSlice';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        Notiflix.Loading.standard('wait...');
        Notiflix.Loading.remove(1000);
        dispatch(addUser(null));
        dispatch(addToken(null));
        dispatch(logIn(false));
        navigate("/", { replace: true });
    }

  return (
    <div>
        <Button variant="outline-secondary" onClick={handleLogOut}>Log Out</Button>{' '}
    </div>
  )
}

export default LogOut
