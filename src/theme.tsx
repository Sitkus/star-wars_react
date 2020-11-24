import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cdcdcd'
    },
    secondary: {
      main: '#1c2434'
    }
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif',
    h1: {
      fontWeight: 'normal',
      fontSize: '34px'
    },
    h2: {
      fontSize: '16px'
    }
  }
});

export default theme;