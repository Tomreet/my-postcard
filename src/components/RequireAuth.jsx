import { useAuth } from '../components/AuthProvider';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default RequireAuth;