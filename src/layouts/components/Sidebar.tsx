import React, { useEffect } from 'react';
import {
  Drawer,
  List,
  Box,
  CircularProgress,
  Typography,
  Toolbar,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchSidebarMenu } from '../../redux/slices/sidebarSlice';
import MenuItem from './SidebarMenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DRAWER_WIDTH = 240;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { menuItems, isLoading, error } = useSelector(
    (state: RootState) => state.sidebar
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!menuItems || menuItems.length === 0) {
      dispatch(fetchSidebarMenu());
    }
  }, [dispatch, menuItems]);

  if (isLoading) {
    return (
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={isMobile ? onClose : undefined}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: isMobile ? { xs: 'block', sm: 'none' } : { xs: 'none', sm: 'block' },
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
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={isMobile ? onClose : undefined}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: isMobile ? { xs: 'block', sm: 'none' } : { xs: 'none', sm: 'block' },
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
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={onClose}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
