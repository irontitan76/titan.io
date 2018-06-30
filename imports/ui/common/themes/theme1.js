import { createMuiTheme } from '@material-ui/core/styles';

const light = '#f2f2f2';
const dark = '#3f4447'; /* 063, 068, 071 */
const blue = '#015085'; /* 001, 080, 133 */
const red = '#ef4747'; /* 239, 071, 071 */
const orange = '#dc8264'; /* 220, 130, 100 */
const green = '#3e7859'; /* 062, 120, 089 */
const purple = '#5a466e'; /* 090, 070, 110 */
const yellow = '#f0bb20'; /* 194, 146, 000 */
const brown = '#996633'; /* 153, 102, 051 */
const gray = '#a6a6a6'; /* 166, 166, 166 */


/* Incident Response Site - Material UI Theme */
export const theme1 = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: blue,
      contrastText: light
    },
    secondary: {
      main: green,
      contrastText: light
    },
    blue: {
      main: blue,
      contrastText: light
    },
    dark: {
      main: dark,
      contrastText: light
    },
    green: {
      main: green,
      contrastText: light
    },
    light: {
      main: light,
      contrastText: dark
    },
    red: {
      main: red,
      contrastText: light
    },
    orange: {
      main: orange,
      contrastText: light
    },
    purple: {
      main: purple,
      contrastText: light
    },
    yellow: {
      main: yellow,
      contrastText: dark
    },
    brown: {
      main: brown,
      contrastText: light
    },
    gray: {
      main: gray,
      contrastText: light
    },
    type: 'light'
  }
});
