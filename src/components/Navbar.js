import React, { Component, Fragment } from 'react';
import logo from '../images/kpLogo.png';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
  style = {
    navbar: {
      backgroundColor: 'black',
      color: 'white',
      height: this.props.fullHeight ? '100vh' : '50vh',
      textAlign: 'center',
      fontSize: '24px',
    },
    navbarText: {
      color: 'white',
    },
    image: {
      width: this.props.fullHeight ? '150px' : '75px',
      paddingTop: this.props.fullHeight ? '15vh' : '8vh',
    },
  };
  render() {
    return (
      <Fragment>
        <div style={this.style.navbar}>
          <img src={logo} alt='logo' style={this.style.image} />
          <br />
          <br />
          <Typography variant='h5'>Motion Graphic Studio</Typography>
          <Typography variant='h5'>Toronto / Canada</Typography>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
