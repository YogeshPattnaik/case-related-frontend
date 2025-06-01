import React from 'react';
import { Box, TextField } from '@mui/material';

type OtpInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
};

const OtpInput: React.FC<OtpInputProps> = ({ value, onChange, length = 6 }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newValue = [...value];
    newValue[index] = e.target.value.slice(-1);
    onChange(newValue);
    if (e.target.nextSibling) {
      (e.target.nextSibling as HTMLElement).focus();
    }
  };

  return (
    <Box display="flex" justifyContent="center" gap={1}>
      {Array.from({ length }).map((_, i) => (
        <TextField
          key={i}
          value={value[i] || ''}
          onChange={(e) => handleChange(e, i)}
          inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
        />
      ))}
    </Box>
  );
};

export default OtpInput;
