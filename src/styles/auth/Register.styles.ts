import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Paper } from '@mui/material';

export const RegisterContainer = styled(Box)({
  height: '100vh',
  display: 'flex',
});

export const FormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export const FormWrapper = styled(Box)({
  width: '100%',
  maxWidth: 600,
});

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
})) as typeof Typography;

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

export const FormGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const FormField = styled(Box)({
  width: '100%',
});

export const FullWidthField = styled(Box)({
  gridColumn: '1 / -1',
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const SignInLink = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

export const DecorativeContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4),
}));

export const DecorativeContent = styled(Box)({
  maxWidth: 500,
  textAlign: 'center',
}); 