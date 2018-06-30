import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  carouselItem: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  icon: {
    fontSize: 18,
    marginRight: theme.spacing.unit * 2.5,
  },
  text: {
    fontSize: 18,
    textDecoration: 'none'
  }
});

export class Banner extends React.Component {
  render() {
    const { classes, items } = this.props;

    return <Grid container justify='space-between'>
      {
        items.map((item, key) => (
          <Grid
            className={classes.carouselItem}
            item
            key={`key__${key}`}>

            <Typography
              className={classes.text}
              component={Link}
              to={item.path}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={[ item.icon.type, item.icon.name ]} />
              {item.name}
            </Typography>

          </Grid>
        ))
      }
    </Grid>;
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default withStyles(styles)(Banner);