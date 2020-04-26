import React, { Fragment } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    width: 250,
  },
  container: {
    display: 'flex',
  },
  paper: {
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
  const contentImageGridListMarkup = content.map((contentItem, index) => (
    <Box className={classes.container}>
      <Grow in timeout={500 * index}>
        <Paper elevation={4} className={classes.paper}>
          <CardMedia
            className={classes.media}
            image={contentItem.image}
            title={contentItem.title}
          />
        </Paper>
      </Grow>
    </Box>
  ));

  return (
    <Fragment>
      <Box display='flex' flexDirection='row' flexWrap='wrap' flexGrow={1}>
        {contentImageGridListMarkup}
      </Box>
    </Fragment>
  );
};

export default Home;
