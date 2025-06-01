import { FormikProps } from 'formik';
import { Box, TextField, MenuItem } from '@mui/material';
import { ProfileCompletionViewModel } from '../../../viewmodels/profile/ProfileCompletionViewModel';

interface IdentificationProps {
  formik: FormikProps<ProfileCompletionViewModel>;
}

const idTypes = [
  { value: '1', label: 'Passport' },
  { value: '2', label: 'National ID' },
  { value: '3', label: 'Driver\'s License' },
];

function Identification({ formik }: IdentificationProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        fullWidth
        select
        label="ID Type"
        name="idTypeId"
        value={formik.values.idTypeId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idTypeId && Boolean(formik.errors.idTypeId)}
        helperText={formik.touched.idTypeId && formik.errors.idTypeId}
      >
        {idTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        label="ID Number"
        name="idNumber"
        value={formik.values.idNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
        helperText={formik.touched.idNumber && formik.errors.idNumber}
      />
      <TextField
        fullWidth
        label="ID Expiry Date"
        name="idExpiryDate"
        type="date"
        value={formik.values.idExpiryDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idExpiryDate && Boolean(formik.errors.idExpiryDate)}
        helperText={formik.touched.idExpiryDate && formik.errors.idExpiryDate}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        fullWidth
        label="ID Issuing Country"
        name="idIssuingCountry"
        value={formik.values.idIssuingCountry}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idIssuingCountry && Boolean(formik.errors.idIssuingCountry)}
        helperText={formik.touched.idIssuingCountry && formik.errors.idIssuingCountry}
      />
    </Box>
  );
}

export default Identification; 