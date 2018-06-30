import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { renderOrderOfElements } from './../common/functions';

const styles = theme => ({
  authorDescription: {
    fontWeight: 300
  },
  avatar: {
    marginBottom: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 3.75,
    marginTop: theme.spacing.unit * 1.5
  },
  bigAvatar: {
    borderRadius: 0,
    height: 60,
    width: 60,
  },
  byline: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`
  },
  name: {
    flex: 1
  }
});

export class ArticleByline extends React.Component {
  renderAvatar = key => {
    const { avatar, classes } = this.props;

    return <Avatar
      alt={avatar.alt}
      className={`${classes.avatar} ${classes.bigAvatar}`}
      component={Grid}
      item
      key={`key__${key}`}
      src={avatar.src} />;
  };

  renderByline = key => {
    const { article = {}, classes } = this.props;

    return <Typography
      className={classes.name}
      component={Grid}
      key={`key__${key}`}
      item>
      <Typography>{article.author && article.author.name}</Typography>
      <Typography className={classes.authorDescription}>
        {article.author && article.author.description}
      </Typography>
    </Typography>;
  };

  render() {
    const { classes, order } = this.props;

    return <Paper
      className={classes.byline}
      component={Grid}
      container
      elevation={1}
      square>
      <Grid alignItems='center' container justify='center'>
        { renderOrderOfElements(this, order) }
      </Grid>
    </Paper>;
  }
}

ArticleByline.propTypes = {
  avatar: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired
};

ArticleByline.defaultProps = {
  avatar: {
    alt: 'Ironman',
    src: '/images/avatars/img_avatar.png'
  },
  order: ['avatar', 'byline']
};

export default withStyles(styles)(ArticleByline);