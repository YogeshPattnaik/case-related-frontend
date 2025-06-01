/* File: src/components/common/Checkbox.tsx */
import React from 'react';
import { Checkbox as MUICheckbox, FormControlLabel, type CheckboxProps as MUICheckboxProps } from '@mui/material';

interface CheckboxProps extends Omit<MUICheckboxProps, 'label'> {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...muiProps }) => {
  if (label) {
    return (
      <FormControlLabel
        control={<MUICheckbox {...muiProps} />}
        label={label}
      />
    );
  }
  return <MUICheckbox {...muiProps} />;
};

export default Checkbox; 