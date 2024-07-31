import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import font from './theme/font'
import typography from './theme/typography'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#FB741C',
    },
    secondary: {
      main: '#2198E8',
    },
  },
  typography: {
    fontFamily: 'Inter',
    ...typography,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: font,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          poster: 'h2',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme)
