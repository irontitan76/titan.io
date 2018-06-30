import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Footer from './../common/components/Footer';

const styles = theme => ({
  companyDescription: {
    // color: theme.palette.common.white,
    fontWeight: 300
  },
  companyItemContainer: {
    marginTop: 65
  },
  companyName: {
    // color: theme.palette.common.white,
    marginTop: theme.spacing.unit * 4
  },
  companyShortName: {
    textAlign: 'center'
  },
  companySlide: {
    height: 300
  },
  icon: {
    fontSize: '.8rem',
    marginLeft: theme.spacing.unit
  },
  subheading: {
    fontWeight: 300
  },
  tile: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  toolbarContainer: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * .5}px`
  }
});

const data = {
  title: 'Our organizations\xa0',
  orgs: [
    {
      name: 'Titan Industries',
      bg: 'dark',
      color: '#fff',
      cols: 9
    },
    {
      name: 'Titan Technology',
      shortName: 'Technology',
      bg: 'blue',
      color: '#fff',
      description: 'Our technology organization focuses on offering optimal \
        professional services and business operations development for sister \
        organizations.'
    },
    {
      name: 'Titan AI',
      shortName: 'AI',
      bg: 'light',
      color: '#000'
    },
    {
      name: 'Titan Finance',
      shortName: 'Finance',
      bg: 'green',
      color: '#fff'
    },
    {
      name: 'Titan Health',
      shortName: 'Health',
      bg: 'purple',
      color: '#fff'
    },
    {
      name: 'Titan Media',
      shortName: 'Media',
      bg: 'red',
      color: '#fff'
    },
    {
      name: 'Titan Legal',
      shortName: 'Legal',
      bg: 'brown',
      color: '#fff'
    },
    {
      name: 'Titan Transport',
      shortName: 'Transport',
      bg: 'yellow',
      color: '#fff'
    },
    {
      name: 'Titan Energy',
      shortName: 'Energy',
      bg: 'orange',
      color: '#fff'
    },
    {
      name: 'Titan Cosmos',
      shortName: 'Cosmos',
      bg: 'gray',
      color: '#fff'
    }
  ]
};

export class Organizations extends React.Component {
  state = {
    selected: 1
  };

  render() {
    const { classes, theme } = this.props;
    const { selected } = this.state;

    return <Grid container justify='center'>

      <Grid className={classes.companyItemContainer} item xs={12}>
        <GridList cellHeight={60} cols={9}>
          {
            data.orgs.map((org, key) => (
              <GridListTile classes={{
                  tile: classes.tile
                }}
                cols={org.cols || 1}
                key={`key__${key}`}
                rows={org.rows || 1}
                style={{
                  backgroundColor: org.bg.charAt(0) === '#'
                    ? org.bg
                    : theme.palette[org.bg].main
                  }}>
                <Typography
                  className={classes.companyShortName}
                  style={{ color: org.color }}
                  variant='subheading'>
                  {org.shortName || org.name}
                </Typography>
              </GridListTile>
            ))
          }
        </GridList>
      </Grid>

      <Grid
        className={classes.companySlide}
        item
        // style={{
        //   backgroundColor: theme.palette[data.orgs[selected].bg].main,
        // }}
        xs={12}>
        <Typography
          align='center'
          className={classes.companyName}
          gutterBottom
          variant='headline'>
          {data.orgs[selected].name}
        </Typography>
        <Typography
          align='center'
          className={classes.companyDescription}
          paragraph>
          {data.orgs[selected].description}
        </Typography>
      </Grid>

      <Footer title='titan.io '/>
    </Grid>;
  }
}

Organizations.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Organizations);