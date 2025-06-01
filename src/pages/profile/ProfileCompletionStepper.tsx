import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import BasicDetailsStep from './components/profile/BasicDetailsStep';
import AddressFormStep from './components/profile/AddressFormStep';
import IdentificationStep from './components/profile/IdentificationStep';

// Import ViewModel and Validation Schema (will create these later)
// import { ProfileCompletionViewModel } from '../../viewmodels/profile/ProfileCompletionViewModel';
// import { profileCompletionValidationSchema } from '../../validations/profile/profileCompletionValidation';

const steps = ['Basic Details', 'Address', 'Identification'];

const ProfileCompletionStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Initialize formik (using a placeholder ViewModel/Schema for now)
  // const formik = useFormik({
  //   initialValues: new ProfileCompletionViewModel(),
  //   validationSchema: profileCompletionValidationSchema,
  //   onSubmit: (values) => {
  //     // Handle form submission for all steps
  //     console.log('Submitting Profile Completion:', values);
  //     // Call API and handle success (logout and redirect)
  //   },
  // });

  const handleNext = () => {
    // You would typically trigger validation here before moving to the next step
    // if (formik.validateForm().then(errors => Object.keys(errors).length === 0)) {
    setActiveStep((prevStep) => prevStep + 1);
    // }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BasicDetailsStep />;
      case 1:
        return <AddressFormStep />;
      case 2:
        return <IdentificationStep />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {getStepContent(activeStep)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileCompletionStepper; 