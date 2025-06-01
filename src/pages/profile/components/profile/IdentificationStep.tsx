import React from 'react';
import { TextField, MenuItem, Box } from '@mui/material';

const IdentificationStep: React.FC = () => {
  const idTypes = [
    { id: 1, name: 'Passport' },
    { id: 2, name: 'Driver License' },
    { id: 3, name: 'National ID' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        select
        fullWidth
        label="ID Type"
        variant="outlined"
        defaultValue=""
      >
        {idTypes.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label="ID Number"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Issuing Country"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Date of Issue"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        fullWidth
        label="Date of Expiry"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
    </Box>
  );
};

export default IdentificationStep; 