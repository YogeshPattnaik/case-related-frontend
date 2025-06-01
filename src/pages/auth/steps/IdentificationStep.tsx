import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

interface IdentificationData {
  type: string;
  idNumber: string;
  document: File | null;
}

interface IdentificationStepProps {
  data: IdentificationData;
  onChange: (data: IdentificationData) => void;
}

const IdentificationStep: React.FC<IdentificationStepProps> = ({ data, onChange }) => {
  const [identificationTypes, setIdentificationTypes] = useState<string[]>([]);

  useEffect(() => {
    // TODO: Fetch identification types from master API
    const fetchIdentificationTypes = async () => {
      try {
        // const response = await fetch('/api/master/identification-types');
        // const data = await response.json();
        // setIdentificationTypes(data);
        setIdentificationTypes(['Aadhar Card', 'PAN Card', 'Passport', 'Driving License']); // Temporary mock data
      } catch (error) {
        console.error('Error fetching identification types:', error);
      }
    };

    fetchIdentificationTypes();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange({ ...data, document: acceptedFiles[0] });
      }
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Identification Information
      </Typography>
      <TextField
        fullWidth
        select
        label="Identification Type"
        name="type"
        value={data.type}
        onChange={handleChange}
        margin="normal"
        required
      >
        {identificationTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        label="ID Number"
        name="idNumber"
        value={data.idNumber}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          p: 3,
          textAlign: 'center',
          cursor: 'pointer',
          mt: 2,
          '&:hover': {
            borderColor: 'primary.main',
          },
        }}
      >
        <input {...getInputProps()} />
        {data.document ? (
          <Typography>{data.document.name}</Typography>
        ) : (
          <Typography>
            Drag and drop a file here, or click to select a file
          </Typography>
        )}
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
        Supported formats: PDF, PNG, JPG, JPEG
      </Typography>
    </Box>
  );
};

export default IdentificationStep; 