import React from 'react';
import { List } from '@mui/material';
import type { MenuItem } from '../../../types/menu';
import MenuItemComponent from './MenuItem';

interface SubMenuProps {
  items: MenuItem[];
  level?: number;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, level = 0 }) => {
  return (
    <List component="div" disablePadding>
      {items.map((item) => (
        <MenuItemComponent key={item.id} item={item} level={level} />
      ))}
    </List>
  );
};

export default SubMenu; 