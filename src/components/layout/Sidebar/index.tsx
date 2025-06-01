import React from 'react';
import {
  Drawer,
  List,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useMenu } from '../../../hooks/useMenu';
import MenuItem from './MenuItem';
import { useAuth } from '../../../hooks/useAuth';

const DRAWER_WIDTH = 240;

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const { menuItems, isLoading, error } = useMenu(user?.roleId ?? 1);

  if (isLoading) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      </Drawer>
    );
  }

  if (error) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            p: 2,
          }}
        >
          <Typography color="error" align="center">
            Failed to load menu. Please try refreshing the page.
          </Typography>
        </Box>
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 