import { createMuiTheme } from '@material-ui/core/styles';

const light = '#f2f2f2';
const dark = '#3f4447'; /* 063, 068, 071 */
const blue = '#015085'; /* 001, 080, 133 */
const red = '#ef4747'; /* 239, 071, 071 */
// const orange = '#dc8264'; /* 220, 130, 100 */
const green = '#3e7859'; /* 062, 120, 089 */
// const purple = '#5a466e'; /* 090, 070, 110 */
// const yellow = '#f0bb20'; /* 194, 146, 000 */
// const brown = '#996633'; /* 153, 102, 051 */
// const gray = '#a6a6a6'; /* 166, 166, 166 */


/* Incident Response Site - Material UI Theme */
export const theme2 = createMuiTheme({
  typography: {
    title: {
      fontSize: 20,
    },
    headline: {
      fontSize: 20,
      fontWeight: 500,
    }
  },
  palette: {
    primary: {
      main: light,
      contrastText: blue
    },
    secondary: {
      main: green,
      contrastText: light
    },
    red: {
      main: red,
      contrastText: light
    },
    type: 'light'
  }
});
