import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Box, Paper, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import { ROUTES } from '../../routes';
import { ProfileCompletionViewModel } from '../../viewmodels/profile/ProfileCompletionViewModel';
import { profileCompletionValidationSchema } from '../../validations/profile/profileCompletionValidation';
import BasicDetails from './steps/BasicDetails';
import AddressDetails from './steps/AddressDetails';
import Identification from './steps/Identification';

const steps = ['Basic Details', 'Address Details', 'Identification'];

function ProfileCompletion() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: new ProfileCompletionViewModel(),
    validationSchema: profileCompletionValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate(ROUTES.DASHBOARD);
    },
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BasicDetails formik={formik} />;
      case 1:
        return <AddressDetails formik={formik} />;
      case 2:
        return <Identification formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Complete Your Profile
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? formik.submitForm : handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfileCompletion; 