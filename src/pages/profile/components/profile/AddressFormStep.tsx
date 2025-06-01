import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
// import { useFormikContext } from 'formik'; // Uncomment when integrating with formik

// interface AddressFormStepProps { formik: any; } // Use Formik type when integrated

const AddressFormStep: React.FC /* <AddressFormStepProps> */ = (/* { formik } */) => {
  // const { values, handleChange, handleBlur, touched, errors } = formik;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" gutterBottom>Address Details</Typography>

      {/* Address Line 1 */}
      <TextField
        label="Address Line 1"
        // name="addressLine1"
        // value={values.addressLine1}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.addressLine1 && Boolean(errors.addressLine1)}
        // helperText={touched.addressLine1 && errors.addressLine1}
        fullWidth
      />

      {/* Address Line 2 (Optional) */}
      <TextField
        label="Address Line 2 (Optional)"
        // name="addressLine2"
        // value={values.addressLine2}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.addressLine2 && Boolean(errors.addressLine2)}
        // helperText={touched.addressLine2 && errors.addressLine2}
        fullWidth
      />

      {/* City */}
      <TextField
        label="City"
        // name="city"
        // value={values.city}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.city && Boolean(errors.city)}
        // helperText={touched.city && errors.city}
        fullWidth
      />

      {/* State/Province */}
      <TextField
        label="State/Province"
        // name="state"
        // value={values.state}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.state && Boolean(errors.state)}
        // helperText={touched.state && errors.state}
        fullWidth
      />

      {/* Country */}
      <TextField
        label="Country"
        // name="country"
        // value={values.country}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.country && Boolean(errors.country)}
        // helperText={touched.country && errors.country}
        fullWidth
      />

      {/* Zip/Postal Code */}
      <TextField
        label="Zip/Postal Code"
        // name="zipCode"
        // value={values.zipCode}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={touched.zipCode && Boolean(errors.zipCode)}
        // helperText={touched.zipCode && errors.zipCode}
        fullWidth
      />

    </Box>
  );
};

export default AddressFormStep; 