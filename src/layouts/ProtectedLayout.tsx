import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../routes';
import MainLayout from './MainLayout';

function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <MainLayout />;
}

export default ProtectedLayout; 