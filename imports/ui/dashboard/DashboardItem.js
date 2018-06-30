import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    // minHeight: 200,
    // maxHeight: 300,
    // width: 300
  }
};

export class DashboardItem extends React.Component {
  getMethod = type => (
    `render${type[0].toUpperCase()}${type.substring(1, type.length)}`
  );

  renderActions = (key, actions, actionsProps) => {
    return <CardActions {...actionsProps}>
      { actions.map(action => this.renderAction(action)) }
    </CardActions>;
  };

  renderAction = action => {
    const { actionProps } = action;
    const method = this.getMethod(action.type);

    return _.invoke([this], method, null, action.content, actionProps);
  };

  renderButton = (key, content, contentProps) => {
    const { classes } = this.props;

    return <Button className={classes.button} key={key} {...contentProps}>
      { content && content.text }
    </Button>
  };

  renderText = (key, content, contentProps) => {
    const { classes } = this.props;

    return <Typography className={classes.typography} key={key} {...contentProps}>
      {content}
    </Typography>;
  };

  renderMedia = (key, content, contentProps) => {
    const { classes } = this.props;

    return <CardMedia className={classes.media} key={key} {...contentProps} />
  };

  renderVisual = (content, contentProps) => {
    return null;
  };

  render() {
    const { classes, item } = this.props;
    const method = this.getMethod(item.type);

    return <Card className={classes.root} square>

      <CardHeader
        className={classes.header}
        subheader={item.subheader}
        title={item.title} />

      <CardContent>
        { _.invoke([this], method, item._id, item.content, item.contentProps) }
      </CardContent>

      { this.renderActions(item._id, item.actions, item.actionProps) }

    </Card>;
  }
}

DashboardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

DashboardItem.defaultProps = {
  classes: {},
  item: {}
};

export default withStyles(styles)(DashboardItem);

