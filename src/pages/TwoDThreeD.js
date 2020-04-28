import React, { Component, Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  ...theme.spreadThis,
});
class TwoDThreeD extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container spacing={20} component={Grow} in timeout={500}>
          <Grid item xs={1} lg={2}>
            <Paper className={classes.paper} elevation={3}>
              aaaaaa
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default withStyles(styles)(TwoDThreeD);
