/* File: src/components/common/AutoCompleteDropdown.tsx */
import React from 'react';
import {
  Autocomplete,
  TextField,
  type AutocompleteProps,
} from '@mui/material';

export interface DropdownOption {
  id: number | string;
  name: string;
}

export interface AutoCompleteDropdownProps extends Omit<AutocompleteProps<DropdownOption, false, false, false>, 'renderInput'> {
  label: string;
  error?: boolean;
  helperText?: string;
}

const AutoCompleteDropdown: React.FC<AutoCompleteDropdownProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
};

export default AutoCompleteDropdown; 