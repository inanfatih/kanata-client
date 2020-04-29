import { createMuiTheme } from '@material-ui/core/styles';

export const drawerWidth = 270;
export const appBarHeight = 70;

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
    background: '#DE2548',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
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
    minHeight: '100vh',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('xs')]: {
      height: `calc(100% - ${appBarHeight}px)`,
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
    width: 40,
  },
  logoSmUp: {
    objectFit: 'contain',
    paddingBottom: 20,
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
    marginTop: '5%',
  },
  companyNameXs: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2em',
    margin: 'auto',
  },
  companyNameOnDrawer: {
    padding: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2.6em',
  },
  listItemText: {
    fontSize: '1.5em',
    margin: theme.spacing(0),
  },

  imageContentBox: {
    [theme.breakpoints.down('xs')]: {
      padding: '3%',
      paddingTop: `calc(3% + ${appBarHeight}px)`,
      marginTop: -1 * appBarHeight,
    },
    [theme.breakpoints.up('sm')]: {
      padding: '3%',
    },
  },

  imageContent: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '10%',
      marginRight: '10%',
      padding: '5%',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '5%',
      marginRight: '5%',
      padding: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      height: `calc(100% - ${appBarHeight}px)`,
      padding: '2%',
    },
    background: 'white',
    color: 'black',
  },

  media: {
    height: '50vh',
  },
  mediaRoot: {
    margin: 'auto',
  },
});
