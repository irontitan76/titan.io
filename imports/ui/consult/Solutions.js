import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {};

export class ConsultSolutions extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Solutions</div>;
  }
}

ConsultSolutions.defaultProps = {};

ConsultSolutions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConsultSolutions);