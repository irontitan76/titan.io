import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Consulting extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>

    </div>
  }
};

Consulting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Consulting);