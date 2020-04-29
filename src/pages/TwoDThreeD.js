import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//Pages

import { styles } from '../util/theme';

const useStyles = makeStyles(styles);

export default function TwoDThreeD() {
  const classes = useStyles();

  console.log(classes);
  const dummyImage =
    'https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/1.png?alt=media';
  return (
    <Grow in timeout={500}>
      <div className={classes.imageContentBox}>
        <Paper className={classes.imageContent} elevation={10}>
          <Card className={classes.mediaRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={dummyImage}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </div>
    </Grow>
  );
}
