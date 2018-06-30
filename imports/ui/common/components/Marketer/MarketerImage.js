import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {};

export class TextWithButton extends React.Component {
  render() {
    const { src } = this.props;

    return <Grid item
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        height: '100%'
      }}>
    </Grid>;
  }
}

TextWithButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextWithButton);