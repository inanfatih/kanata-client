import React, { Fragment } from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(0),
  },
}));

const Home = () => {
  const [content, setContent] = React.useState([]);

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
            container>
            <div
              style={{
                height: 0,
                overflow: 'hidden',
                paddingTop: '20%',
                position: 'relative',
                background: `url(${contentItem.image})`,
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
            </div>
          </Grid>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
