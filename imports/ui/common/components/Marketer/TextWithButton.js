import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    backgroundColor: theme.palette.dark.main,
    borderRadius: 0,
    color: theme.palette.light.main,
    marginTop: theme.spacing.unit * 4,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.dark.main
    }
  },
  container: {
    padding: `${theme.spacing.unit * 15}px ${theme.spacing.unit * 6.5}px`
  },
  text: {
    fontWeight: 300
  }
});

export class TextWithButton extends React.Component {
  render() {
    const { buttonProps, classes, containerProps, link, text, typographyProps } = this.props;

    return <Grid
      className={classes.container}
      container
      justify='center'
      {...containerProps}>

      <Typography
        align='center'
        className={classes.text}
        variant='headline'
        {...typographyProps}>
        {text}
      </Typography>

      <Button
        className={classes.button}
        component={Link}
        to={link.path}
        variant='raised'
        {...buttonProps}>
        {link.text}
      </Button>

    </Grid>;
  }
}

TextWithButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextWithButton);