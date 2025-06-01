import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export const lazyLoad = (importFunc: () => Promise<any>) => {
  const LazyComponent = React.lazy(importFunc);

  return function LazyLoadWrapper(props: any) {
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
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
}; 