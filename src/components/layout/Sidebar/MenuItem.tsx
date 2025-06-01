import React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MenuItem as MenuItemType } from '../../../types/menu';
import SubMenu from './SubMenu';

interface MenuItemProps {
  item: MenuItemType;
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
    } else {
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
            <span className="material-icons">{item.icon}</span>
          </ListItemIcon>
        )}
        <ListItemText primary={item.label} />
        {hasChildren && (
          <span className="material-icons">
            {open ? 'expand_less' : 'expand_more'}
          </span>
        )}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SubMenu items={item.children} level={level + 1} />
        </Collapse>
      )}
    </Box>
  );
};

export default MenuItem; 