import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function PublicLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Outlet />
    </Box>
  );
}

export default PublicLayout; 