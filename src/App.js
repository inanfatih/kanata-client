import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VideocamIcon from '@material-ui/icons/Videocam';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Work from '@material-ui/icons/Work';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

import axios from 'axios';
import logo from './images/kpLogo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#DE2548',
    color: '#fff',
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
  },
  icons: {
    color: '#fff',
  },
  logoXs: {
    padding: '10px',
    margin: 'auto 5%',
    width: 60,
  },
  logoSmUp: {
    objectFit: 'contain',
    paddingBottom: 50,
    paddingTop: 75,
    backgroundColor: 'black',
  },
  companyName: {
    fontSize: 24,
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  socialMediaIcons: {
    margin: '10%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
  },
}));

axios.defaults.baseURL =
  'https://us-central1-kanata-production.cloudfunctions.net/api';

function App(props) {
  const themes = createMuiTheme(themeFile);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key='Works' onClick={handleClick}>
          <ListItemIcon className={classes.icons}>
            <Work />
          </ListItemIcon>
          <ListItemText primary='Works' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icons}>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary='2D & 3D' />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icons}>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary='Videos' />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icons}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Social Media' />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button key='Contact'>
          <ListItemIcon className={classes.icons}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
      <br />

      <div className={classes.socialMediaIcons}>
        <i className='fab fa-vimeo-square fa-2x'></i>
        <i className='fab fa-behance-square fa-2x'></i>
        <i className='fab fa-facebook-square fa-2x'></i>
      </div>
    </div>
  );

  return (
    <MuiThemeProvider theme={themes}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Hidden smUp implementation='css'>
            <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}>
                  <MenuIcon />
                </IconButton>
                <img src={logo} alt='logo' className={classes.logoXs} />
                <div className={classes.companyName}>Motion Graphic Studio</div>
              </Toolbar>
            </AppBar>
          </Hidden>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation='css'>
              {/* Drawer in MOBILE */}
              <Drawer
                container={container}
                variant='temporary'
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}>
                <img src={logo} alt='logo' className={classes.logoSmUp} />
                <div className={classes.companyName}>Motion Graphic Studio</div>
                <div className={classes.companyName}>Toronto / Canada</div>
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation='css'>
              {/* Drawer in DESKTOP */}
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant='permanent'
                open>
                <img src={logo} alt='logo' className={classes.logoSmUp} />
                <div className={classes.companyName}>Motion Graphic Studio</div>
                <div className={classes.companyName}>Toronto / Canada</div>
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <Hidden smUp>
              <div className={classes.toolbar} />
            </Hidden>

            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>

            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
