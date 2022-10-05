import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../types/commonTypes';

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;

  // Check for the token in the local storage
  if (!localStorage.getItem('authToken')) {
    return <Navigate to={{ pathname: '/' }} replace />;
  }

  return children;
};

export default ProtectedRoute;
