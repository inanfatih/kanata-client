import React, { Component } from 'react';
import ThumbnailCards from './ThumbnailCards';

class Home extends Component {
  render() {
    return <ThumbnailCards dataPath='/content' />;
  }
}

export default Home;
