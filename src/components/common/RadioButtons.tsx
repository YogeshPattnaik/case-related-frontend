/* File: src/components/common/RadioButtons.tsx */
import React from 'react';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, type RadioGroupProps } from '@mui/material';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonsProps extends Omit<RadioGroupProps, 'onChange'> {
  options: RadioOption[];
  label?: string;
  onChange?: (value: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ options, label, onChange, ...muiProps }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup onChange={handleChange} {...muiProps}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons; 