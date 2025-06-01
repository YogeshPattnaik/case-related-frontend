import { FormikProps } from 'formik';
import { Box, TextField } from '@mui/material';
import { ProfileCompletionViewModel } from '../../../viewmodels/profile/ProfileCompletionViewModel';

interface AddressDetailsProps {
  formik: FormikProps<ProfileCompletionViewModel>;
}

function AddressDetails({ formik }: AddressDetailsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        fullWidth
        label="Address Line 1"
        name="addressLine1"
        value={formik.values.addressLine1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
        helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
      />
      <TextField
        fullWidth
        label="Address Line 2"
        name="addressLine2"
        value={formik.values.addressLine2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)}
        helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
      />
      <TextField
        fullWidth
        label="City"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        fullWidth
        label="State"
        name="state"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      />
      <TextField
        fullWidth
        label="Country"
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.country && Boolean(formik.errors.country)}
        helperText={formik.touched.country && formik.errors.country}
      />
      <TextField
        fullWidth
        label="Postal Code"
        name="postalCode"
        value={formik.values.postalCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
        helperText={formik.touched.postalCode && formik.errors.postalCode}
      />
    </Box>
  );
}

export default AddressDetails; 