import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Hidden from '@material-ui/core/Hidden';

class Home extends Component {
  
  componentWillMount() {
    this.getContents();
  }

  contents = [];

  getContents = () => {
    axios
      .get('/content')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.contents = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let contentMarkup = this.contents.map((content) => (
      <img src={content.image} alt='content was here' />
    ));
    return (
      <Fragment>
        <Hidden smUp implementation='css'>
          <br />
          <br />
          <br />
        </Hidden>
        {contentMarkup}
        {'HOMECOMPONENTMMMMM'}
      </Fragment>
    );
  }
}

export default Home;
