import React from 'react';
import { Icon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';

interface DynamicIconProps {
  iconName: string;
}

const iconMap: { [key: string]: React.ReactElement } = {
  dashboard: <DashboardIcon />,
  folder: <FolderIcon />,
  masters: <FolderIcon />,
  users: <PeopleIcon />,
  cases: <DescriptionIcon />,
  judgement: <GavelIcon />,
  causelist: <ListAltIcon />,
  reports: <AssessmentIcon />,
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const normalizedIconName = iconName.toLowerCase();
  
  if (iconMap[normalizedIconName]) {
    return iconMap[normalizedIconName];
  }

  return <Icon>{normalizedIconName}</Icon>;
};

export default DynamicIcon; 