import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ROUTES } from '../../routes';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Case Status', path: '/case-status' },
    { label: 'Judgement', path: '/judgement' },
    { label: 'Causelist', path: '/causelist' },
    { label: 'Display Board', path: '/display-board' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Case Management System
          </Typography>
          <Stack direction="row" spacing={2}>
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
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            py: 8,
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Case Portal
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Your comprehensive case management solution
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Case Management
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Efficiently manage and track all your cases in one place
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Task Tracking
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Stay organized with our comprehensive task management system
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Analytics
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Get insights with detailed reports and analytics
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage; 