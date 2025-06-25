import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LandingLayout, ProtectedLayout } from '../layouts';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ResetPassword from '../pages/auth/ResetPassword';
import LandingPage from '../pages/landing/LandingPage';
import { RootState } from '../redux/store';
import { flattenMenu } from '../utils/flattenMenu';
import { ROUTES } from './index';
import pathToComponent from './pathToComponent';
import { CircularProgress, Box } from '@mui/material';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const menuItems = useSelector((state: RootState) => state.sidebar.menuItems);
  const allowedPaths: string[] = flattenMenu(menuItems);
  const location = useLocation();
  if (!allowedPaths.includes(location.pathname)) {
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
};

const DynamicRoutes: React.FC = () => {
  const menuItems = useSelector((state: RootState) => state.sidebar.menuItems);
  const isLoading = useSelector((state: RootState) => state.sidebar.isLoading);
  const allowedPaths: string[] = flattenMenu(menuItems);

  if (isLoading || allowedPaths.length === 0) {
    // Show loading spinner while menu is loading or empty
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Routes>
      {allowedPaths.map((path: string) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              {pathToComponent[path] ? pathToComponent[path]() : <div>Not Found</div>}
            </ProtectedRoute>
          }
        />
      ))}
      <Route path="*" element={<Navigate to={allowedPaths[0] || '/login'} />} />
    </Routes>
  );
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  const isAuthenticated = Boolean(user);

  return (
    <Routes>
      {/* Landing page - with header */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Auth pages - no header */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />

      {/* Protected routes - with sidebar and header */}
      <Route element={<ProtectedLayout />}>
        <Route path="*" element={<DynamicRoutes />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 