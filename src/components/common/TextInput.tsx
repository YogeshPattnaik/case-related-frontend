import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

const TextInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      {...props}
    />
  );
};

export default TextInput;