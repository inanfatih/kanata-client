import React, { Fragment } from 'react';
import logo from '../images/kpLogo.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

function Navbar(props) {
  const { widthBreakpoint } = props;

  const style = {
    navbar: {
      backgroundColor: 'black',
      // backgroundColor: theme.palette.secondary.main,
      color: 'white',
      height:
        widthBreakpoint === 'md' ||
        widthBreakpoint === 'lg' ||
        widthBreakpoint === 'xl'
          ? '50vh'
          : '100vh',
      textAlign: 'center',
      fontSize: '24px',
    },
    navbarText: {
      color: 'white',
    },
    image: {
      width:
        widthBreakpoint === 'xs' || widthBreakpoint === 'sm' ? '150px' : '75px',
      paddingTop:
        widthBreakpoint === 'xs' || widthBreakpoint === 'sm' ? '15vh' : '8vh',
    },
  };

  const navbarMarkup = (
    <div style={style.navbar}>
      <img src={logo} alt='logo' style={style.image} />
      <br />
      <br />
      <Typography variant='h5'>Motion Graphic Studio</Typography>
      <Typography variant='h5'>Toronto / Canada</Typography>
    </div>
  );
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={2} md={3} xs={12}>
          {navbarMarkup}
        </Grid>
      </Grid>
    </Fragment>
  );
}

Navbar.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Navbar);
