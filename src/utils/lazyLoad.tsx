import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export function lazyLoad(importFunc: () => Promise<{ default: React.ComponentType<any> }>): () => JSX.Element {
  const LazyComponent = React.lazy(importFunc);

  return function LazyLoadWrapper() {
    return (
      <React.Suspense
        fallback={
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress />
          </Box>
        }
      >
        <LazyComponent />
      </React.Suspense>
    );
  };
} 