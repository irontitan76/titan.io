import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ArticleByline from './ArticleByline';
import ArticleContent from './ArticleContent';
import ArticleImage from './ArticleImage';
import ArticleSidebar from './ArticleSidebar';
import Footer from './../common/components/Footer';
import InsightsMenu from './InsightsMenu';

import { Articles } from '../../api/articles.js';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  root: {
    marginTop: 65
  }
});

export class Article extends React.Component {
  render() {
    const { article = {}, classes } = this.props;

    return (
      <Grid className={classes.root}>

        <InsightsMenu />

        <Grid className={classes.container} container spacing={24}>

          <Grid item md={8} xs={12}>
            <ArticleImage article={article} />
            <ArticleContent article={article} />
            <ArticleByline article={article} />
          </Grid>

          <Grid item md={4} xs={12}>
            <Grid container spacing={16}>
              <ArticleSidebar currentAuthor={article.author && article.author.name} />
            </Grid>
          </Grid>

        </Grid>

        <Footer title='titan.io' />
      </Grid>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withTracker((props) => {
  Meteor.subscribe('articles');
  return { article: Articles.findOne({
    slug: props.match.params.slug
  }) };
})(withStyles(styles)(Article));