import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';

interface PersonalInfoData {
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
}

interface PersonalInfoStepProps {
  data: PersonalInfoData;
  onChange: (data: PersonalInfoData) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ data, onChange }) => {
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    // TODO: Fetch roles from master role API
    const fetchRoles = async () => {
      try {
        // const response = await fetch('/api/master/roles');
        // const data = await response.json();
        // setRoles(data);
        setRoles(['Advocate', 'Client', 'Judge', 'Court Staff']); // Temporary mock data
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        value={data.mobileNumber}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        select
        label="Role"
        name="role"
        value={data.role}
        onChange={handleChange}
        margin="normal"
        required
      >
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default PersonalInfoStep; 