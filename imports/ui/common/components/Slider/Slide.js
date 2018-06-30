import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    alignSelf: 'center',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    width: '100%'
  }
};

export class Slider extends React.Component {
  render() {
    const { background, children, classes, height, ...props } = this.props;

    return <Grid container
      className={classes.root}
      style={{
        backgroundImage: `url(${background})`,
        height
      }}
      {...props}>
      { children }
    </Grid>
  }
}

Image.propTypes = {};

export default withStyles(styles)(Slider);