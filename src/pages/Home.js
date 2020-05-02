import React, { Fragment } from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

import { drawerWidth } from '../util/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(0),
  },
}));

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions(),
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Home = () => {
  const [content, setContent] = React.useState([]);

  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    axios
      .get('/content')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();
  console.log(classes);
  console.log('width: ', width);
  console.log('height: ', height);

  let gridWidth = 100;
  if (width > 1280) {
    gridWidth = (width - drawerWidth) / 6;
  } else if (width > 960) {
    gridWidth = (width - drawerWidth) / 4;
  } else if (width > 600) {
    gridWidth = (width - drawerWidth) / 2;
  } else gridWidth = width;

  return (
    <Fragment>
      <div className={classes.container}>
        {content.map((contentItem, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            component={Grow}
            in
            timeout={200 * index}
            container
            style={{
              background: `url(${contentItem.image})`,
              backgroundImage: `url(${contentItem.image})`,
            }}>
            <Typography
              style={{
                height: gridWidth,
                overflow: 'hidden',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                justifyContent: 'center',
              }}>
              <Paper
                square
                style={{
                  position: 'absolute',
                }}></Paper>
            </Typography>
          </Grid>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
