import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#7e57c2',
        main: '#673AB7',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#6ec6ff',
        main: '#2196F3',
        dark: '#0069c0',
        contrastText: '#000',
      },
    },
  });

export default theme;

