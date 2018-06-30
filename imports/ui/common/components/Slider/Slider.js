import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    backgroundImage: 'url(./images/skyline-1x.webp)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex'
  }
};

export class Slider extends React.Component {
  render() {
    const { background, classes, height, slides, ...props } = this.props;

    return <div
      className={classes.root}
      style={{
        backgroundImage: `url(${background})`,
        height
      }}>
      { slides }
    </div>
  }
}

Image.propTypes = {};

export default withStyles(styles)(Slider);