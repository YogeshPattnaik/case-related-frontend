import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ value, onChange }) => {
  const [captchaText, setCaptchaText] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontSize: '1.5rem',
          letterSpacing: '0.5rem',
          userSelect: 'none',
        }}
      >
        {captchaText}
      </Box>
      <TextField
        required
        fullWidth
        label="Enter Captcha"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};

export default Captcha; 