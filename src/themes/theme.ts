import { extendTheme } from '@chakra-ui/react';
import {
  signInButton,
  logoText,
  errorMessage,
  logOutButton,
} from './customComponents';
import globalStyles from './globalStyles';
import { colors, breakpoints } from './themeElements';

const theme = extendTheme({
  colors,
  breakpoints,
  styles: {
    global: globalStyles,
  },
  components: {
    Heading: {
      variants: {
        logoText,
      },
    },
    Button: {
      variants: {
        signInButton,
        logOutButton,
      },
    },
    Text: {
      variants: {
        errorMessage,
      },
    },
  },
});
export default theme;
