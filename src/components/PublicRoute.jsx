import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * - If the route is public and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.isLogged.isLogged);
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

