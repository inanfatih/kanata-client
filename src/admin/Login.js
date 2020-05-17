import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'; //built in react for type checking. Minimizes potential errors
import kpLogo from '../images/kpLogo.png';
import axios from 'axios';
//MUI stuff
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { styles } from '../util/theme';
import '../App.css';

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {},
    };
  }

  handleSubmit = (event) => {
    console.log('handleSubmit', event);
    event.preventDefault();
    this.setState({ loading: true });

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('/login', userData)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem(
          'KanataProductionToken',
          `Bearer ${res.data.token}`,
        );
        this.setState({
          loading: false,
        });
        this.props.history.push('/admin'); //state i degistirdikten sonra bu path e gitmeyi sagliyoruz
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
        });
      });
  };

  handleChange = (event) => {
    console.log('handleChange', event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <div>
        <Grow in timeout={500}>
          <div className={classes.contactContentBox}>
            <Paper className={classes.contactContent} elevation={10}>
              <Card className={classes.contactRoot} elevation={5}>
                <CardContent style={{ justifyContent: 'center' }}>
                  <img
                    src={kpLogo}
                    alt='Logo'
                    style={{
                      margin: '0 40%',
                      marginTop: '5%',
                      width: '20%',
                    }}
                  />

                  <form
                    onSubmit={this.handleSubmit}
                    className={classes.contactForm}>
                    <Typography
                      variant='h4'
                      component='h2'
                      style={{
                        marginBottom: '2%',
                        marginLeft: '2%',
                        width: '95%',
                      }}>
                      Login
                    </Typography>

                    <TextField
                      id='email'
                      name='email'
                      type='email'
                      variant='outlined'
                      label='Email'
                      className={classes.textField}
                      helperText={errors.email}
                      error={errors.email ? true : false}
                      value={this.state.email}
                      onChange={this.handleChange}
                      fullWidth
                    />
                    <TextField
                      id='password'
                      name='password'
                      type='password'
                      variant='outlined'
                      label='Password'
                      className={classes.textField}
                      helperText={errors.password}
                      error={errors.password ? true : false}
                      value={this.state.password}
                      onChange={this.handleChange}
                      fullWidth
                    />
                    {errors.general && (
                      <Typography
                        variant='body2'
                        className={classes.customError}>
                        {errors.general.toUpperCase()}
                      </Typography>
                    )}
                    <Button
                      size='large'
                      type='submit'
                      variant='contained'
                      color='primary'
                      style={{ margin: '2%', width: '95%', padding: '1%' }}
                      disabled={loading && !errors}>
                      Login
                      {loading && (
                        <CircularProgress
                          className='classes.progress'
                          size='30'></CircularProgress>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </Grow>
      </div>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);