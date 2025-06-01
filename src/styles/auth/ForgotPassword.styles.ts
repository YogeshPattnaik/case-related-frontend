import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Paper } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

export const Title = styled(Typography)({
  marginBottom: 16,
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

export const Form = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const SignInLink = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
}); 