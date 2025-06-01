/* File: src/components/common/CaptchaBox.tsx */
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

interface CaptchaBoxProps {
  captchaText: string;
  onRefresh: () => void;
  width?: number;
  height?: number;
}

const CaptchaBox: React.FC<CaptchaBoxProps> = ({
  captchaText,
  onRefresh,
  width = 200,
  height = 60,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
          border: '1px solid #e0e0e0',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            letterSpacing: '0.5em',
            userSelect: 'none',
          }}
        >
          {captchaText}
        </Typography>
      </Box>
      <IconButton onClick={onRefresh} size="small">
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default CaptchaBox; 