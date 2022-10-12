import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * - If the route is private and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.isLogged.isLogged);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};