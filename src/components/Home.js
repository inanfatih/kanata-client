import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    this.getVideos();
  }

  videos = [];

  getVideos = () => {
    axios
      .get('/videos')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.videos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  style = {
    color: 'blue',
  };

  render() {
    let videosMarkup = this.videos.map((video) => (
      <img src={video.image} alt='for video' />
    ));
    return (
      <Fragment>
        {videosMarkup}
        {'HOME'}
      </Fragment>
    );
  }
}

/*
componentDidMount() {
    this.props.getScreams();
  }
  render() {

    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile></Profile>
        </Grid>
      </Grid>
    );
  }
*/
export default Home;
