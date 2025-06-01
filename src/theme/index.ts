import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { variables } from '../styles/variables';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      maxWidth: number;
      headerHeight: number;
      sidebarWidth: number;
      borderRadius: number;
      transition: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      maxWidth?: number;
      headerHeight?: number;
      sidebarWidth?: number;
      borderRadius?: number;
      transition?: string;
    };
  }
}

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: variables.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: variables.borderRadius,
  },
  custom: {
    maxWidth: variables.maxWidth,
    headerHeight: variables.headerHeight,
    sidebarWidth: variables.sidebarWidth,
    borderRadius: variables.borderRadius,
    transition: variables.transition,
  },
};

const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'light',
    primary: {
      main: variables.primaryColor,
      light: variables.primaryLightColor,
      dark: variables.primaryDarkColor,
      contrastText: variables.white,
    },
    secondary: {
      main: variables.secondaryColor,
      light: variables.secondaryLightColor,
      dark: variables.secondaryDarkColor,
      contrastText: variables.white,
    },
    error: {
      main: variables.errorColor,
      light: variables.errorLightColor,
      dark: variables.errorDarkColor,
      contrastText: variables.white,
    },
    warning: {
      main: variables.warningColor,
      light: variables.warningLightColor,
      dark: variables.warningDarkColor,
      contrastText: variables.white,
    },
    info: {
      main: variables.infoColor,
      light: variables.infoLightColor,
      dark: variables.infoDarkColor,
      contrastText: variables.white,
    },
    success: {
      main: variables.successColor,
      light: variables.successLightColor,
      dark: variables.successDarkColor,
      contrastText: variables.white,
    },
    grey: {
      50: variables.grey50,
      100: variables.grey100,
      200: variables.grey200,
      300: variables.grey300,
      400: variables.grey400,
      500: variables.grey500,
      600: variables.grey600,
      700: variables.grey700,
      800: variables.grey800,
      900: variables.grey900,
    },
    text: {
      primary: variables.textPrimaryColor,
      secondary: variables.textSecondaryColor,
      disabled: variables.textDisabledColor,
    },
    background: {
      default: variables.backgroundDefaultColor,
      paper: variables.backgroundPaperColor,
    },
    divider: variables.dividerColor,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: variables.borderRadius,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadius,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: variables.primaryColor,
      light: variables.primaryLightColor,
      dark: variables.primaryDarkColor,
      contrastText: variables.white,
    },
    secondary: {
      main: variables.secondaryColor,
      light: variables.secondaryLightColor,
      dark: variables.secondaryDarkColor,
      contrastText: variables.white,
    },
    error: {
      main: variables.errorColor,
      light: variables.errorLightColor,
      dark: variables.errorDarkColor,
      contrastText: variables.white,
    },
    warning: {
      main: variables.warningColor,
      light: variables.warningLightColor,
      dark: variables.warningDarkColor,
      contrastText: variables.white,
    },
    info: {
      main: variables.infoColor,
      light: variables.infoLightColor,
      dark: variables.infoDarkColor,
      contrastText: variables.white,
    },
    success: {
      main: variables.successColor,
      light: variables.successLightColor,
      dark: variables.successDarkColor,
      contrastText: variables.white,
    },
    grey: {
      50: variables.grey50,
      100: variables.grey100,
      200: variables.grey200,
      300: variables.grey300,
      400: variables.grey400,
      500: variables.grey500,
      600: variables.grey600,
      700: variables.grey700,
      800: variables.grey800,
      900: variables.grey900,
    },
    text: {
      primary: variables.white,
      secondary: variables.grey400,
      disabled: variables.grey600,
    },
    background: {
      default: variables.grey900,
      paper: variables.grey800,
    },
    divider: variables.grey700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: variables.borderRadius,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadius,
        },
      },
    },
  },
});

export default lightTheme; 