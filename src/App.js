import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import axios from 'axios';

import Navigation from './layout/Navigation';
import { themeJs, makeStylesTheme } from './util/theme';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TwoDThreeD from './pages/TwoDThreeD';
import Videos from './pages/Videos';
import SocialMedia from './pages/SocialMedia';

axios.defaults.baseURL =
  'https://us-central1-kanata-production.cloudfunctions.net/api';

const useStyles = makeStyles(makeStylesTheme);

function App() {
  const themes = createMuiTheme(themeJs);
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={themes}>
      <Router>
        <div className={classes.root}>
          <Navigation />
          <main className={classes.content}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/2d3d' component={TwoDThreeD} />
              <Route exact path='/videos' component={Videos} />
              <Route exact path='/socialmedia' component={SocialMedia} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
