import React from 'react';
import { Switch, FormControlLabel, CircularProgress } from '@mui/material';

interface ToggleSwitchProps {
  checked?: boolean; // Controlled mode
  defaultChecked?: boolean; // Uncontrolled mode
  onChange?: (checked: boolean) => void;
  loading?: boolean;
  label?: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  defaultChecked,
  onChange,
  loading = false,
  label,
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!loading && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <FormControlLabel
      control={
        loading ? (
          <CircularProgress size={24} />
        ) : (
          <Switch
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={handleChange}
            disabled={disabled || loading}
          />
        )
      }
      label={label}
    />
  );
};

export default ToggleSwitch; 