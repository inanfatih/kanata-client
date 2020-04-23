import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import axios from 'axios';

import Navigation from './layout/Navigation';
import { themeJs, makeStylesTheme } from './util/theme';

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
            </Switch>
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
