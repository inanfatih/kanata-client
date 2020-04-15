import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

import axios from 'axios';

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL =
  'https://us-central1-kanata-production.cloudfunctions.net/api';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/login' component={login} />
              <Route exact path='/signup' component={signup} />
              <Route
                exact
                path='/users/:handle/scream/:screamId'
                component={user}
              /> */}
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
