import { createMuiTheme } from '@material-ui/core/styles';

const drawerWidth = 240;
const appBarHeight = 70;

export const theme = createMuiTheme({
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
    background: '#DE2548',
  },
  typography: {
    fontFamily: "['Oswald', 'sans-serif'].join(',')",
  },
});

export const styles = (theme) => ({
  root: {
    display: 'flex',
    background: '#DE2548',
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
    [theme.breakpoints.down('xs')]: {
      height: appBarHeight,
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
    minHeight: '100vh',
    backgroundColor: '#DE2548',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${appBarHeight}px)`,
      marginTop: appBarHeight,
    },
    background: '#DE2548',
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
  companyNameXs: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
  },
  companyNameOnDrawer: {
    padding: '10px',
    paddingBottom: '40px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 36,
  },
});
