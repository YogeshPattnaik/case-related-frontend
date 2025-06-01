import React from 'react';
import { Tabs as MuiTabs, Tab, Box } from '@mui/material';

interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactElement;
}

interface TabsProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  tabs: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  tabs,
  orientation = 'horizontal',
  variant = 'standard',
  className,
}) => {
  return (
    <Box className={className}>
      <MuiTabs
        value={value}
        onChange={onChange}
        orientation={orientation}
        variant={variant}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            icon={tab.icon}
            iconPosition="start"
          />
        ))}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
