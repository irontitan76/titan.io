import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Spin as Hamburger } from 'react-burgers';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  bold: {
    fontWeight: 900
  },
  burger: {
    paddingTop: theme.spacing.unit * .5
  },
  menu: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `${theme.spacing.unit * .5}px solid #333`,
    padding: theme.spacing.unit * 4
  },
  period: {
    color: theme.palette.primary.main
  },
  subtitle: {
    color: '#000',
    fontWeight: 300,
    textDecoration: 'none'
  },
  title: {
    fontSize: '1.75rem'
  }
});

export class InsightsMenu extends React.Component {
  state = {
    open: false
  };

  render() {
    const { open } = this.state;
    const { classes, nickname, subtitles, title } = this.props;

    return (
      <Grid alignItems='center' className={classes.menu} container>
        <Typography className={classes.title} variant='title'>
          {nickname[0]}
          <span className={classes.period}>{nickname[1]}</span>
          <span className={classes.bold}>{nickname[2]}</span>
          &nbsp;&nbsp;
        </Typography>
        <Typography className={`${classes.title} ${classes.burger}`} variant='title'>
          <Hamburger
            active={open}
            lineHeight={3}
            onClick={() => this.setState({ open: !open })}
            width={28}
          />
        </Typography>
        <Typography className={classes.title} variant='title'>
          |&nbsp; {
            open ? _.map(subtitles,
              (subtitle, key) => (
                <Link className={classes.subtitle} key={key} to='/'>
                  {subtitle}&nbsp;&nbsp;
                </Link>
              ))
            : title
          }
        </Typography>

      </Grid>
    );
  }
}

InsightsMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

InsightsMenu.defaultProps = {
  nickname: ['nxt','.','vision'],
  subtitles: ['A.I.', 'Cloud', 'Data', 'Web', 'Team'],
  title: 'All Topics',
};

export default withStyles(styles)(InsightsMenu);