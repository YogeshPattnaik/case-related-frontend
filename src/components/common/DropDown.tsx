/* File: src/components/common/DropDown.tsx */
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectProps,
} from '@mui/material';

interface Option {
  value: string | number;
  label: string;
}

interface DropDownProps extends Omit<SelectProps, 'onChange'> {
  options: Option[];
  label?: string;
  onChange?: (value: string | number) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  onChange,
  ...muiProps
}) => {
  const handleChange = (event: any) => {
    onChange?.(event.target.value);
  };

  return (
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        label={label}
        onChange={handleChange}
        {...muiProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown; 