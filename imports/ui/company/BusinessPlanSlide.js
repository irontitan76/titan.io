import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  block: {
    lignSelf: 'flex-start',
    fontSize: 36,
    fontWeight: 200,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit ,
    paddingRight: theme.spacing.unit
  },
  container: {
    backgroundColor: '#f2f2f2',
    marginTop: 30,
    padding: 30
  },
  headline: {
    alignSelf: 'flex-start',
    color: '#3f4447',
    fontSize: 48,
    paddingTop: theme.spacing.unit * 2.5,
    paddingLeft: theme.spacing.unit ,
    paddingRight: theme.spacing.unit
  },
  subtitle: {
    alignSelf: 'center',
    color: '#3f4447',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 300,
    padding: `${theme.spacing.unit * 2.5}px ${theme.spacing.unit}px`
  },
});

export class BusinessPlanSlide extends React.Component {
  render() {
    const {
      alignAll, classes, content, contentProps, containerProps, headline,
      headlineProps, subtitle, subtitleProps
    } = this.props;
    let modifiedContainerProps = {};
    let modifiedContentProps = {};
    let modifiedHeadlineProps = {};
    let modifiedSubtitleProps = {};

    const alignDictionary = {
      left: 'flex-start',
      right: 'flex-end',
      center: 'center'
    };

    if ( alignAll ) {
      modifiedContainerProps.justify =  containerProps.justify || alignDictionary[alignAll];
      modifiedContainerProps = {
        ...modifiedContainerProps,
        ...containerProps
      };

      modifiedContentProps.align =  contentProps.align || alignAll;
      modifiedContentProps = {
        ...modifiedContentProps,
        ...contentProps
      };

      modifiedHeadlineProps.align =  headlineProps.align || alignAll;
      modifiedHeadlineProps = {
        ...modifiedHeadlineProps,
        ...headlineProps
      };

      modifiedSubtitleProps.align =  subtitleProps.align || alignAll;
      modifiedSubtitleProps = {
        ...modifiedSubtitleProps,
        ...subtitleProps
      };
    }

    return <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='flex-start'
      {...modifiedContainerProps}>
      <Typography
        align='left'
        className={classes.headline}
        component={Grid}
        item
        variant='title'
        xs={12}
        {...modifiedHeadlineProps}>
        { headline }
      </Typography>
      <Typography
        align='center'
        className={classes.subtitle}
        component={Grid}
        item
        variant='subheading'
        xs={12}
        {...modifiedSubtitleProps}>
        { subtitle }
      </Typography>
      <Typography
        align='left'
        className={classes.block}
        component={Grid}
        item
        variant='body1'
        xs={6}
        {...modifiedContentProps}>
        { content }
      </Typography>
    </Grid>;
  }
}

BusinessPlanSlide.propTypes = {
  classes: PropTypes.object.isRequired,
  containerProps: PropTypes.object,
  content: PropTypes.node,
  contentProps: PropTypes.object,
  headline: PropTypes.node,
  headlineProps: PropTypes.object,
  subtitle: PropTypes.node,
  subtitleProps: PropTypes.object
};

BusinessPlanSlide.defaultProps = {
  alignAll: 'left',
  classes: {},
  containerProps: {},
  content: '',
  contentProps: {},
  headline: '',
  headlineProps: {},
  subtitleProps: {}
};

export default withStyles(styles)(BusinessPlanSlide);