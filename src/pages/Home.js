import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
  },
  paper: {
    margin: theme.spacing(0),
  },
  imageContainer: {},
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
          timeout={200 * index}>
          <img src={contentItem.image} alt={contentItem.title} />
        </Grid>
      ))}
    </div>
  );
};

export default Home;
