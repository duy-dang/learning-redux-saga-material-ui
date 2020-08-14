import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#e74c3c',
    secondary: '#16a085',
    info: '#3498db',
    error: '#d35400',
    defaulttextColor: 'black',
  },
  typography: {
    fontfamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: ' #e74c3c',
    textColor: '#ecf0f1',
    border: '#34495e',
  },
});

export default theme;
