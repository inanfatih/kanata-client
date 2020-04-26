import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
//MUI
import { makeStyles } from '@material-ui/core/styles';

//Pages
import Navigation from './layout/Navigation';
import { styles } from './util/theme';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TwoDThreeD from './pages/TwoDThreeD';
import Videos from './pages/Videos';
import SocialMedia from './pages/SocialMedia';

axios.defaults.baseURL =
  'https://us-central1-kanata-production.cloudfunctions.net/api';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <Router>
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
    </Router>
  );
}

export default App;
