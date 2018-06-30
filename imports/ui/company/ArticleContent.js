import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { renderOrderOfElements } from './../common/functions';

const styles = theme => ({
  article: {
    padding: (
      `${theme.spacing.unit * 5}px
      ${theme.spacing.unit * 4}px
      ${theme.spacing.unit * 3}px
      ${theme.spacing.unit * 4}px`
    )
  },
  publishDate: {
    color: '#777',
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 2
  },
  title: {
    marginBottom: theme.spacing.unit * 2
  }
});

/*
  For this class, we pass in an order of elements for the page through props. The element is then invoked to render to
  the screen. For instance, if order = ['title', 'subtitle'] then renderTitle() and renderSubtitle() will be called
  consecutively with appropriate objects and values passed in.
 */
export class ArticleContent extends React.Component {
  renderPublishDate = (key) => {
    const { article = {}, classes } = this.props;

    return <Typography
      className={classes.publishDate}
      gutterBottom
      key={`key__${key}`}
      variant='body1'>
      Published on {
        article._publishedAt && article._publishedAt
          .toLocaleDateString(navigator.language || language)
      }
    </Typography>
  };

  renderSubtitle = (key) => {
    const { article = {}, classes } = this.props;

    return <Typography
      className={classes.subtitle}
      gutterBottom
      key={`key__${key}`}
      variant='subheading'>
      {article.subtitle}
    </Typography>;
  };

  renderTextBody = (key) => {
    const { article = {}, classes } = this.props;

    return <Typography
      component='div'
      key={`key__${key}`}
      style={{ fontWeight: 300 }}>
      {
        (article.body || '').split('\n')
          .map((text, key) => <p key={`key__${key}`}>{text}</p>)
      }
    </Typography>;
  };

  renderTitle = (key) => {
    const { article = {}, classes } = this.props;

    return <Typography
    key={`key__${key}`}
      variant='display2'>
      {article.title}
    </Typography>;
  };

  render() {
    const { classes, order } = this.props;

    return <Paper
      className={classes.article}
      elevation={1}
      square>
      { renderOrderOfElements(this, order) }
    </Paper>;
  }
}

ArticleContent.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired
};

ArticleContent.defaultProps = {
  order: ['publishDate', 'title', 'subtitle', 'textBody']
};

export default withStyles(styles)(ArticleContent);