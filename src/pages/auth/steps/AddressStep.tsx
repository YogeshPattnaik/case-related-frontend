import React from 'react';
import {
  TextField,
  Box,
  Typography,
} from '@mui/material';

interface AddressData {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface AddressStepProps {
  data: AddressData;
  onChange: (data: AddressData) => void;
}

const AddressStep: React.FC<AddressStepProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Address Information
      </Typography>
      <TextField
        fullWidth
        label="Street Address"
        name="street"
        value={data.street}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="City"
        name="city"
        value={data.city}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="State"
        name="state"
        value={data.state}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Country"
        name="country"
        value={data.country}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Postal Code"
        name="postalCode"
        value={data.postalCode}
        onChange={handleChange}
        margin="normal"
        required
      />
    </Box>
  );
};

export default AddressStep; 