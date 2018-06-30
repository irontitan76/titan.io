import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MarketerImage from './MarketerImage';
import TextWithButton from './TextWithButton';

const styles = {
  typographyContainer: {
    height: '100%'
  }
};

export class Marketer extends React.Component {
  render() {
    const { classes, items, component } = this.props;

    let marketItems = items.map(item => {
      let elements = {
        left: item.left,
        right: item.right
      };

      ['left', 'right'].forEach(direction => {
        if ( typeof item[direction] === 'undefined' ) {
          elements[direction] = null;
        } else {
          if ( typeof item[direction] !== 'string'
            || (typeof item[direction] !== 'object'
              && item[direction].length > 0)
            ) {
            switch (item[direction].type) {
              case 'textWithButton':
                elements[direction] = (
                  <TextWithButton
                    buttonProps={item[direction].buttonProps}
                    containerProps={item[direction].containerProps}
                    link={item[direction].link}
                    text={item[direction].text}
                    typographyProps={item[direction].typographyProps} />
                );
                break;
              case 'image':
                elements[direction] = (
                  <MarketerImage
                    alt={item[direction].alt}
                    imageProps={item[direction].imageProps}
                    src={item[direction].src}
                    {...item[direction].containerProps} />
                );
                break;
              default:
                elements[direction] = (
                  <Grid
                    alignItems='center'
                    className={classes.typographyContainer}
                    container
                    direction='column'
                    justify='center'
                    style={ item[direction] && item[direction].style }>
                    <Typography align='center' component={Grid} item {...item[direction].typographyProps}>
                      {item[direction].text}
                    </Typography>
                  </Grid>
                );
                break;
            }
          }
        }
      });

      const leftProps = item.left && item.left.containerProps;
      const rightProps = item.right && item.right.containerProps;

      return [
          <Grid item key={0} md={6} xs={12} {...leftProps}>
            {elements.left}
          </Grid>,
          <Grid item key={1} md={6} xs={12} {...rightProps}>
            {elements.right}
          </Grid>
        ][item.direction === 'rtl' ? 'reverse' : 'sort']()
    });

    return <Grid container>
      { marketItems }
    </Grid>
  }
}

Marketer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Marketer);