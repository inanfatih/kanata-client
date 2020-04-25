import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../images/kpLogo.png';
import { makeStylesTheme, themeJs } from '../util/theme';

//MUI
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WorkIcon from '@material-ui/icons/Work';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(makeStylesTheme);

function Navigation(props) {
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
      <List className={classes.toolbarText}>
        <Link to='/'>
          <ListItem button key='Home'>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <ListItem button key='Works' onClick={handleClick}>
          <ListItemIcon className={classes.icons}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary='Works' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Link to='/2d3d'>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icons}>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText primary='2D & 3D' />
              </ListItem>
            </Link>
          </List>
          <List component='div' disablePadding>
            <Link to='/videos'>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icons}>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='Videos' />
              </ListItem>
            </Link>
          </List>
          <List component='div' disablePadding>
            <Link to='/socialmedia'>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icons}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Social Media' />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to='/contact'>
          <ListItem button key='Contact'>
            <ListItemIcon className={classes.icons}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
        </Link>
      </List>
      <br />

      <div className={classes.socialMediaIcons}>
        <a
          href='https://www.vimeo.com'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-vimeo-square fa-2x'></i>
        </a>
        <a
          href='https://www.behance.com'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-behance-square fa-2x'></i>
        </a>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-facebook-square fa-2x'></i>
        </a>
      </div>
    </div>
  );

  return (
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
            <Link to='/'>
              <img src={logo} alt='logo' className={classes.logoXs} />
            </Link>
            <Link to='/'>
              <div className={classes.companyName}>Motion Graphic Studio</div>
            </Link>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer}>
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
            <Link to='/'>
              <Typography
                className={classes.companyName}
                variant='companyNameText'>
                Motion Graphic Studio
              </Typography>
            </Link>
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
            <Link to='/' className={classes.companyName}>
              <Typography variant={themeJs.typography.companyNameText}>
                Motion Graphic Studio
              </Typography>
            </Link>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <Hidden smUp>
        <div className={classes.toolbar} />
      </Hidden>
    </div>
  );
}

export default Navigation;
