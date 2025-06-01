import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  maxWidth: 400,
  width: '100%',
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  textAlign: 'center',
}));

export const Form = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(3),
  width: '100%',
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const SignInLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
})); 