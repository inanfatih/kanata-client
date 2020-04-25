const drawerWidth = 240;

export const themeJs = {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#000',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DE2548',
      main: '#f00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(','),
    companyNameText: {
      fontFamily: ['Oswald', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: 36,
      padding: '10px',
      paddingBottom: '40px',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
    },
  },
};

export const makeStylesTheme = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    minHeight: '100vh',
    backgroundColor: '#DE2548',
    color: '#fff',
    fontSize: 24,
  },
  icons: {
    color: '#fff',
  },
  logoXs: {
    padding: '10px',
    margin: 'auto 2%',
    width: 60,
  },
  logoSmUp: {
    objectFit: 'contain',
    paddingBottom: 50,
    paddingTop: 75,
    backgroundColor: 'black',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  socialMediaIcons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
    marginTop: '10%',
  },
  navigationText: {
    fontFamily: ['Oswald', 'sans-serif'].join(','),
    fontWeight: 700,
    fontSize: 36,
  },
  companyName: {
    padding: '10px',
    paddingBottom: '40px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 36,
  },
});
