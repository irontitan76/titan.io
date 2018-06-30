import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Banner from './../common/components/Banner';
import Footer from './../common/components/Footer';
import Marketer from './../common/components/Marketer';

import { Content } from '../../api/content.js';
import { manifest } from './../common/manifests/manifest';

const styles = theme => ({
  faIcon: {
    fontSize: 18,
    marginRight: theme.spacing.unit * 2.5,
  },
  slide: {
    backgroundImage: 'url("./images/skyline-1x.webp")',
    backgroundSize: 'cover',
    height: 675,
    padding: 50
  },
  slideButton: {
    borderRadius: 0,
    margin: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.main,
    }
  },
  slideDarkButton: {
    backgroundColor: theme.palette.dark.main,
    borderRadius: 0,
    color: theme.palette.light.main,
    margin: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.dark.main
    }
  },
  slideHeading: {
    color: theme.palette.common.white,
    fontWeight: 300
  },
  slideInnerContainer: {
    marginTop: 60,
    paddingTop: 60
  },
  slideSubheading: {
    color: theme.palette.common.white,
    fontWeight: 300,
    marginBottom: 20
  }
});

export class Company extends React.Component {
  state = {
    isAuthenticated: false,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentWillMount() {
    this.setState({ ...this.state, isAuthenticated: Meteor.user() })
  }

  render() {
    const { content, classes } = this.props;

    return <Grid container>
      <Grid className={classes.slide} container justify='center'>

        <Grid className={classes.slideInnerContainer} item md={10} xs={12}>
          <Grid container>
            <Typography
              align='center'
              className={classes.slideHeading}
              component={Grid}
              gutterBottom
              item
              variant='display2'
              xs={12}>
              { content[0] && content[0].text }
            </Typography>

            <Typography
              align='center'
              className={classes.slideSubheading}
              component={Grid}
              gutterBottom
              item
              variant='subheading'
              xs={12}>
              { content[0] && content[0].subtitle }
            </Typography>
          </Grid>

          <Grid alignItems='center' container justify='center' spacing={16}>
            <Grid item md={4} xs={12}>
              <Button
                className={classes.slideButton}
                color='secondary'
                component={Link}
                fullWidth
                size='large'
                to='/insights'
                variant='raised'>
                <FontAwesomeIcon
                  className={classes.faIcon}
                  icon={[ 'fal', 'binoculars' ]} />
                Learn more
              </Button>
            </Grid>

            <Grid item md={4} xs={12}>
              <Button
                className={classes.slideDarkButton}
                color='default'
                component={Link}
                fullWidth
                size='large'
                to='/orgs'
                variant='raised'>
                <FontAwesomeIcon
                  className={classes.faIcon}
                  icon={[ 'fal', 'briefcase' ]} />
                Our organizations
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {
        _.map([
          <Banner items={manifest.categories} />,
          <Marketer items={manifest.ads}/>,
          <Footer title={manifest.title}/>
        ], (item, key) => <Grid item key={key} xs={12}>{ item }</Grid>)
      }

    </Grid>
  }
};

Company.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe('content');
  return {
    content: Content.find({
      org: 'company',
      view: 'home'
    }).fetch()
  };
})(withStyles(styles)(Company));