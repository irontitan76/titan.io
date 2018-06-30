import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({});

export class ArticleImage extends React.Component {
  render() {
    const { article = {}, classes } = this.props;

    return <Paper elevation={1} square>
        <img
          alt={article.images && article.images.primary.alt}
          src={`/images/${article.images && article.images.primary.src}`}
          style={{
            backgroundSize: 'cover',
            height: '100%',
            width: '100%'
          }}/>
      </Paper>;
  }
}

ArticleImage.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticleImage);