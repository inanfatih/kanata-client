import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

//Pages
import { styles } from '../util/theme';
import '../App.css';

const useStyles = makeStyles(styles);

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState('');
  const [isFailed, setIsFailed] = React.useState(false);
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let messageObject = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    axios
      .post('/contact', messageObject)
      .then((res) => {
        console.log('res', res);
        console.log('res.data', res.data);
        setIsSuccessful(true);
        console.log('setIsSuccessful', isSuccessful);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => {
          setIsFailed(false);
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((err) => {
        console.log('err', err);
        setErrors(err.errors);
        console.log('errors', errors);
        setIsFailed(true);
        console.log('isFailed', isFailed);
        setTimeout(() => {
          setIsFailed(false);
          setIsSuccessful(false);
        }, 5000);
      });
  };

  return (
    <div>
      <Grow in timeout={500}>
        <div className={classes.contactContentBox}>
          <Paper className={classes.contactContent} elevation={10}>
            <Card className={classes.contactRoot} elevation={5}>
              <CardContent style={{ justifyContent: 'center' }}>
                <form className={classes.contactForm}>
                  <Typography
                    variant='h4'
                    component='h2'
                    style={{
                      margin: '3% 2%',
                      width: '95%',
                    }}>
                    Contact Us
                  </Typography>
                  <TextField
                    required
                    id='name'
                    label='Name'
                    variant='outlined'
                    helperText={
                      name.length === 0 ? 'Please enter your name' : ''
                    }
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                  />
                  <TextField
                    required
                    id='email'
                    label='Email'
                    variant='outlined'
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    helperText={
                      email.length === 0
                        ? 'Please enter your email address'
                        : ''
                    }
                  />
                  <TextField
                    required
                    id='phone'
                    label='Phone Number'
                    variant='outlined'
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                    helperText={
                      phone.length === 0 ? 'Please enter your phone number' : ''
                    }
                  />
                  <TextField
                    required
                    multiline
                    id='message'
                    rows={5}
                    label='Message'
                    variant='outlined'
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    helperText={
                      message.length === 0 ? 'Please enter your message' : ''
                    }
                  />
                  <FormHelperText
                    style={{
                      paddingLeft: '2%',
                      paddingBottom: '2%',
                    }}
                    variant='h4'
                    component='h2'>
                    We'll never share your contact details.
                  </FormHelperText>

                  {isSuccessful && (
                    <Button
                      style={{
                        margin: '2%',
                        width: '95%',
                        background: '#4BB543',
                        padding: '1%',
                        textAlign: 'center',
                        color: 'white',
                        cursor: 'default',
                      }}>
                      MESSAGE SENT
                    </Button>
                  )}
                  {isFailed && (
                    <Button
                      style={{
                        margin: '2%',
                        width: '95%',
                        background: '#DE2548',
                        padding: '1%',
                        textAlign: 'center',
                        color: 'white',
                      }}>
                      SENDING FAILED
                    </Button>
                  )}
                  <Button
                    size='large'
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={{ margin: '2%', width: '95%', padding: '1%' }}
                    onClick={handleSubmit}>
                    SEND
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Paper>
        </div>
      </Grow>
    </div>
  );
};

export default Contact;
