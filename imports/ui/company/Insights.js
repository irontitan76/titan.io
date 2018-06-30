import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

import { Articles } from '../../api/articles.js';
import Footer from './../common/components/Footer';
import InsightsMenu from './InsightsMenu';

const styles = theme => ({
  alphaMessage: {
    color: '#cecece',
    marginTop: 20
  },
  articles: {
    minHeight: 'calc(100vh - 215px)',
    padding: theme.spacing.unit * 4
  },
  gridList: {
    paddingBottom: theme.spacing.unit * 2,
    width: '100%'
  },
  root: {
    marginTop: 65
  },
  tile: {
    padding: 0,
    transition: 'transform .3s ease-out',
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      transform: 'translate(0, -3px)'
    }
  }
});

const data = {
  gridListHeight: 200,
  title: 'Insights',
};

export class Insights extends React.Component {
  renderArticles = () => {
    const { articles = [], classes } = this.props;

    return articles.map(article => (
      <GridListTile
        classes={{ tile: classes.tile }}
        cols={article.metadata && article.metadata.cols || 4}
        component={article.slug && Link}
        key={article._id}
        rows={article.metadata && article.metadata.rows || 1}
        to={article.slug && `insights/${article.slug}`}>

        <img alt={article.images && article.images.primary.alt}
          src={`./images/${article.images && article.images.primary.src}`} />
        
        <GridListTileBar
          title={article.title}
          subtitle={<span>by: {article.author && article.author.name}</span>}
          actionIcon={
            <IconButton className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }></GridListTileBar>
      </GridListTile>
    ));
  };

  renderEdge = () => {
    const { classes, contentEnd } = this.props;

    return <Typography align='center' className={classes.alphaMessage}>
      { contentEnd }
    </Typography>;
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.root}
        container
        direction='column'>

        <InsightsMenu />

        <Grid
          className={classes.articles}
          container>

          <GridList
            cellHeight={data.gridListHeight}
            className={classes.gridList}
            cols={16}
            spacing={16}>
            { this.renderArticles() }
          </GridList>

          { this.renderEdge() }

        </Grid>

        <Footer title='titan.io' />
      </Grid>
    );
  }
}

Insights.propTypes = {
  classes: PropTypes.object.isRequired,
  contentEnd: PropTypes.string.isRequired
};

Insights.defaultProps = {
  classes: {},
  contentEnd: 'You\'ve reached the beginning of our insights'
};

export default withTracker(() => {
  Meteor.subscribe('articles');
  return { articles: Articles.find({}, { limit: 25, sort: { _id: -1 } }).fetch() };
})(withStyles(styles)(Insights));