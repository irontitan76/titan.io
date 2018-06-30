import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.dark.main
  },
  small: {
    fontWeight: 300
  },
  subheading: {
    color: theme.palette.light.main,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`
  }
});

export class Footer extends React.Component {
  render() {
    const { classes, copyright, title, ...props } = this.props;

    return <Grid
      className={classes.root}
      container
      justify='space-between'
      { ...props }>

      <Grid item>
        <Typography
          className={classes.subheading}
          variant='subheading'>
          {title}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          className={`${classes.subheading} ${classes.small}`}
          variant='subheading'>
          {copyright}
        </Typography>
      </Grid>
      
    </Grid>;
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  copyright: PropTypes.string,
  title: PropTypes.node
};

Footer.defaultProps = {
  copyright: '© Copyright 2017-2018'
};

export default withStyles(styles)(Footer);