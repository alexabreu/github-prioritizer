import { createMuiTheme } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: pink
  },
});

export default theme;
