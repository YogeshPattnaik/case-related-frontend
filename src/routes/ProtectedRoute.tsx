import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PUBLIC_ROUTES } from '../types/routes';

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
