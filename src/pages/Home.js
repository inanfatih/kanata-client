import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Hidden from '@material-ui/core/Hidden';

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
        <Hidden smUp implementation='css'>
          <br />
          <br />
          <br />
        </Hidden>
        {videosMarkup}
        {'HOMECOMPONENTMMMMM'}
      </Fragment>
    );
  }
}

export default Home;
