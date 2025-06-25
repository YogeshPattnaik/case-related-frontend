import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingHeader from './components/LandingHeader';

const LandingLayout: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LandingHeader />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default LandingLayout; 