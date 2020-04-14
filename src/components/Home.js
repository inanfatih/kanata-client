import React, { Component, Fragment } from 'react';

class Home extends Component {
  style = {
    color: 'blue',
  };
  render() {
    return (
      <Fragment>
        <div style={this.style}>home</div>
      </Fragment>
    );
  }
}

export default Home;
