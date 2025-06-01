import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { ROUTES } from '../../routes';

const Unauthorized: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Unauthorized Access
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          You don't have permission to access this page.
        </Typography>
        <Button
          component={RouterLink}
          to={ROUTES.LOGIN}
          variant="contained"
          fullWidth
        >
          Back to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Unauthorized; 