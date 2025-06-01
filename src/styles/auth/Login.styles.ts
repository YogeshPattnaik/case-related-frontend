import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const baseStyles = {
  display: 'flex',
};

export const LoginContainer = styled(Box)(baseStyles);

export const FormContainer = styled(Box)(({ theme }) => ({
  ...baseStyles,
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export const FormWrapper = styled(Box)({
  width: '100%',
  maxWidth: 400,
});

export const WelcomeText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

export const TabsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const SignUpLink = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: 'center',
}));

export const DecorativeContainer = styled(Box)(({ theme }) => ({
  ...baseStyles,
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

export const DecorativeSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
})); 