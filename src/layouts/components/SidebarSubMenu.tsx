import React from 'react';
import { List } from '@mui/material';
import type { SidebarMenuItem } from '../../services/sidebarService';
import MenuItemComponent from './SidebarMenuItem';

interface SubMenuProps {
  items: SidebarMenuItem[];
  level?: number;
}

const SidebarSubMenu: React.FC<SubMenuProps> = ({ items, level = 0 }) => {
  return (
    <List component="div" disablePadding>
      {items.map((item) => (
        <MenuItemComponent key={item.label} item={item} level={level} />
      ))}
    </List>
  );
};

export default SidebarSubMenu; 