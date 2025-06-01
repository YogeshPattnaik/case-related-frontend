import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../routes';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { Box } from '@mui/material';

function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { sm: `${240}px` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default ProtectedLayout; 