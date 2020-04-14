import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Grid container>
        <Hidden only={['xs', 'sm']}>
          <Grid item lg={2} md={3} xs={12}>
            <Navbar fullHeight={true} />
          </Grid>
          <Grid item lg={10} md={9} xs={12}>
            <Home /> {'dddddddddddd'}
          </Grid>
        </Hidden>
        <Hidden only={['xl', 'lg', 'md']}>
          <Grid item lg={2} md={3} xs={12}>
            <Navbar fullHeight={false} />
          </Grid>
          <Grid item lg={10} md={9} xs={12}>
            <Home /> {'fffffffffff'}
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default App;
