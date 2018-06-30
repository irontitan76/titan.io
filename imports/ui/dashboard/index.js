import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DashboardItem from './DashboardItem';

const styles = theme => ({
  root: {
    marginTop: 65,
    padding: 25
  },
});

export class Dashboard extends React.Component {
  render() {
    const { classes, items } = this.props;

    return <Grid className={classes.root} container spacing={16}>
      { items && items.map(item => (
        <Grid
          item
          key={item._id}
          lg={item.lg || 3}
          md={item.md || 3}
          sm={item.sm || 6}
          xl={item.xl || 3}
          xs={item.xs || 12}>
          <DashboardItem item={item} />
        </Grid>))
      }
    </Grid>;
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

Dashboard.defaultProps = {
  classes: {},
  items: [{
    _id: '0000',
    actions: [{
      type: 'text',
      content: 'Hello'
    },
    {
      type: 'button',
      content: {
        text: 'Button'
      }
    }],
    children: [],
    content: 'Sample Description',
    name: 'Sample Item',
    subheader: 'Short snippet',
    title: 'Sample Title',
    type: 'text'
  }]
};

export default withStyles(styles)(Dashboard);