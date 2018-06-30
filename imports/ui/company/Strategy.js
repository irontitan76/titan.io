import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {};

export class Strategy extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Strategy</div>;
  }
}

Strategy.defaultProps = {};

Strategy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Strategy);