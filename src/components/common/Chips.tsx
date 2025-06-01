/* File: src/components/common/Chips.tsx */
import React from 'react';
import { Chip, Box, type ChipProps } from '@mui/material';

interface ChipsProps {
  items: string[];
  onDelete?: (item: string) => void;
  chipProps?: Omit<ChipProps, 'label' | 'onDelete'>;
}

const Chips: React.FC<ChipsProps> = ({ items, onDelete, chipProps }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          onDelete={onDelete ? () => onDelete(item) : undefined}
          {...chipProps}
        />
      ))}
    </Box>
  );
};

export default Chips; 