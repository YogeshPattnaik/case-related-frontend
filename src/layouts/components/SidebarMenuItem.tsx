import React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import type { SidebarMenuItem } from '../../services/sidebarService';
import SidebarSubMenu from './SidebarSubMenu';
import DynamicIcon from './DynamicIcon';

interface MenuItemProps {
  item: SidebarMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isActive = location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <Box>
      <ListItemButton
        onClick={handleClick}
        selected={isActive}
        sx={{
          pl: level * 2,
          '&.Mui-selected': {
            backgroundColor: 'primary.light',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          },
        }}
      >
        {item.icon && (
          <ListItemIcon>
            <DynamicIcon iconName={item.icon} />
          </ListItemIcon>
        )}
        <ListItemText primary={item.label} />
        {hasChildren ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SidebarSubMenu items={item.children} level={level + 1} />
        </Collapse>
      )}
    </Box>
  );
};

export default MenuItem; 