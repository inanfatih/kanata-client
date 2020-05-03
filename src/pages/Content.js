import React from 'react';
import axios from 'axios';

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

//TODO: FOTOLAR VE VIDEOLAR ARASINDA GECIS ICIN KULLANILACAK: https://github.com/rcaferati/react-awesome-slider

//TODO:AWESOME SLIDER REFERANSLARI: https://caferati.me/demo/react-awesome-slider/scaling
//TODO: https://fullpage.caferati.me/

//TODO: Sayfalar arasinda gecis icin bunu kullan: https://github.com/rcaferati/ras-fullpage-strategies

const useStyles = makeStyles(styles);

export default function TwoDThreeD(props) {
  //TODO: direct to home incase of not found content

  const [contentPage, setContent] = React.useState([]);

  const classes = useStyles();

  const contentId = props.match.params.contentId;

  React.useEffect(() => {
    axios
      .get(`/content/${contentId}`)
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contentId]);

  //TODO: video oldugunda video gosterilecek sekilde degistir

  return (
    <Grow in timeout={500}>
      <div className={classes.imageContentBox}>
        <Paper className={classes.imageContent} elevation={10}>
          <Card className={classes.mediaRoot} elevation={5}>
            <CardActionArea
              style={{
                cursor: 'default',
              }}>
              <CardMedia
                component='img'
                className={classes.cardMedia}
                image={contentPage.image}
                title={contentPage.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h3'>
                  {contentPage.title}
                </Typography>
                <Typography gutterBottom variant='h5'>
                  {contentPage.subtitle}
                </Typography>
                <Typography variant='h6' color='textSecondary' component='p'>
                  {contentPage.description}
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
