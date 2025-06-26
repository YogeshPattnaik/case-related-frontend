/* File: src/components/common/Button.tsx */
import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 500,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)'
}));

const Button: React.FC<ButtonProps> = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
