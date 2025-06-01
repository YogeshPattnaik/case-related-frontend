import React from 'react';
import { TextField, MenuItem, Box } from '@mui/material';

const BasicDetailsStep: React.FC = () => {
  const roles = [
    { id: 1, name: 'Consumer' },
    { id: 2, name: 'Advocate' },
    { id: 3, name: 'Commission' },
    { id: 4, name: 'Judge' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        disabled
        value="user@example.com"
      />

      <TextField
        fullWidth
        label="Mobile Number"
        variant="outlined"
        disabled
        value="+1234567890"
      />

      <TextField
        select
        fullWidth
        label="Role"
        variant="outlined"
        defaultValue=""
      >
        {roles.map((role) => (
          <MenuItem key={role.id} value={role.id}>
            {role.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default BasicDetailsStep; 