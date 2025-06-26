import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { Button } from '../../components/common';

const PublicHeader: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Case Status', path: '/case-status' },
    { label: 'Judgement', path: '/judgement' },
    { label: 'Causelist', path: '/causelist' },
    { label: 'Display Board', path: '/display-board' },
  ];

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Case Portal
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Login / Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PublicHeader; 