import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RestoreIcon from '@material-ui/icons/Restore';
import Typography from '@material-ui/core/Typography';
import {Articles} from '../../api/articles';

import { renderOrderOfElements } from './../common/functions';

const styles = theme => ({
  authorName: {
    color: theme.palette.gray.main
  },
  content: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`
  },
  contentLink: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    textDecoration: 'none'
  },
  heading: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`
  },
  headingIcon: {
    marginRight: theme.spacing.unit * 2
  }
});

export class ArticleSidebar extends React.Component {
  renderContent = (key, opts) => {
    const { classes } = this.props;

    return <Paper
      className={classes.content}
      elevation={1}
      key={`key__${key}`}
      square>
      {
        this.props[opts.attr].map(article => (
          <Grid alignItems='center' component={Link} container className={classes.contentLink} key={article._id} spacing={8} to={article.slug}>
            <Avatar alt={article.images.primary.src} component={Grid} item src={`/images/${article.images && article.images.primary.src}`} style={{ borderRadius: 0 }} />
            <Typography component={Grid} item>
              <div>{article.title}</div>
              <div className={classes.authorName}> by {article.author.name}</div>
            </Typography>
          </Grid>
        ))
      }
    </Paper>;
  };

  renderHeading = (key, opts) => {
    const { classes } = this.props;

    return <Paper
      className={classes.heading}
      elevation={1}
      key={`key__${key}`}
      square>
      <Grid alignItems='center' component={Grid} container>
        <RestoreIcon className={classes.headingIcon}/>
        <Typography variant='subheading'>{ opts.title }</Typography>
      </Grid>
    </Paper>;
  };

  render() {
    const { order } = this.props;

    return <Grid item xs={12}>
      { renderOrderOfElements(this, order) }
    </Grid>;
  }
}

ArticleSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired
};

ArticleSidebar.defaultProps = {
  order: [
    { name: 'heading', opts: { title: 'Most Recent Posts' }},
    { name: 'content', opts: { attr: 'mostRecent' }},
    { name: 'heading',  opts: { title: 'Posts by the Same User' }},
    { name: 'content', opts: { attr: 'sameAuthor' }}
  ]
};

export default withTracker((props) => {
  Meteor.subscribe('articles');
  return {
    mostRecent: Articles.find({}, { limit: 5, sort: { _id: -1 } }).fetch(),
    sameAuthor: Articles.find({ 'author.name': props.currentAuthor }, { limit: 5, sort: { _id: -1 } }).fetch()
  };
})(withStyles(styles)(ArticleSidebar));