import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import ReactPlayer from 'react-player';

//MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//Pages
import { styles } from '../util/theme';
import '../App.css';

//TODO: FOTOLAR VE VIDEOLAR ARASINDA GECIS ICIN KULLANILACAK: https://github.com/rcaferati/react-awesome-slider

//TODO:AWESOME SLIDER REFERANSLARI: https://caferati.me/demo/react-awesome-slider/scaling
//TODO: https://fullpage.caferati.me/

//TODO: Sayfalar arasinda gecis icin bunu kullan: https://github.com/rcaferati/ras-fullpage-strategies

const useStyles = makeStyles(styles);

export default function Content(props) {
  const [contentPage, setContent] = React.useState({});
  const [images, setImage] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [imageLightBoxImageList, setImageLightBoxImageList] = React.useState(
    [],
  );
  const classes = useStyles();

  let loadingMarkup = (
    <div
      style={{
        width: '30%',
        height: '100vh',
        margin: 'auto',
      }}>
      <CircularProgress
        size={200}
        thickness={1}
        color={'#fff'}
        style={{ marginTop: '30vh' }}
      />
    </div>
  );

  const contentId = props.match.params.contentId;

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`/content/${contentId}`)
      .then(async (res) => {
        setContent(res.data);
        setImage(res.data.imageList);
        setImageLightBoxImageList([
          ...[res.data.mainImage],
          ...res.data.imageList,
        ]);

        // const serafetting = [...[res.data.mainImage], ...res.data.imageList];
        // console.log('serafetting', serafetting);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contentId]);

  const videoMarkup = (
    <Grow in timeout={500}>
      <div className={classes.imageContentBox}>
        <Card className={classes.mediaRoot} elevation={5}>
          <CardActionArea disableTouchRipple>
            <div className='player-wrapper'>
              <ReactPlayer
                url={contentPage.videoUrl}
                width='100%'
                height='100%'
                className='react-player'
              />
            </div>
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
            <Link to='/contact'>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Grow>
  );

  const socialMediaMarkup = (
    <Grow in timeout={500}>
      <div className={classes.imageContentBox}>
        <Card className={classes.mediaRoot} elevation={5}>
          <CardActionArea
            style={{
              cursor: 'default',
            }}>
            <CardMedia
              component='img'
              className={classes.cardMedia}
              image={contentPage.mainImage}
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
            <Link to='/contact'>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Grow>
  );

  const twoDthreeDMarkup = (
    <Grow in timeout={500}>
      <div className={classes.imageContentBox}>
        <Card className={classes.mediaRoot} elevation={5}>
          <CardActionArea
            style={{
              cursor: 'default',
            }}>
            <CardMedia
              component='img'
              className={classes.cardMedia}
              image={contentPage.mainImage}
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
            <CardActions>
              <Link to='/contact'>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </CardActionArea>
        </Card>
        {images.map((imageLink, index) => (
          <Card key={index} className={classes.mediaRoot} elevation={5}>
            <CardMedia
              component='img'
              className={classes.cardMedia}
              image={imageLink}
            />
          </Card>
        ))}
      </div>
    </Grow>
  );

  return loading
    ? loadingMarkup
    : contentPage.type === 3
    ? // Video content
      videoMarkup
    : //Social Media Content
    contentPage.type === 1
    ? socialMediaMarkup
    : twoDthreeDMarkup;
}
