import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BusinessPlanSlide from './BusinessPlanSlide';

const styles = theme => ({
  block: {
    alignSelf: 'center',
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit ,
    paddingRight: theme.spacing.unit
  },
  byline: {
    marginBottom: theme.spacing.unit * 3
  },
  headline: {
    alignSelf: 'flex-start',
    paddingTop: theme.spacing.unit * 2.5,
    paddingLeft: theme.spacing.unit ,
    paddingRight: theme.spacing.unit
  },
  missionContainer: {
    backgroundColor: '#015085',
    height: 225
  },
  missionText: {
    color: 'white',
    fontSize: 18
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3
  },
  root: {
    marginTop: theme.spacing.unit * 15,
    [theme.breakpoints.down('sm')]: {
      marginTop: 55
    }
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 3
  },
  title: {
    letterSpacing: 2,
    paddingTop: theme.spacing.unit * 3
  },
  video: {
    marginBottom: theme.spacing.unit * 4
  }
});

const data = {
  items: [
    {
      author: <React.Fragment>&mdash; The Future Friendly Manifesto by Brad Frost &mdash;</React.Fragment>,
      text: '“Disruption will only accelerate. The quantity and diversity of \
      connected devices — many of which we haven’t imagined yet — will \
      explode, as will the quantity and diversity of the people around \
      the world who use them. Our existing standards, workflows, and \
      infrastructure won’t hold up. Today’s onslaught of devices is \
      already pushing them to the breaking point. They can’t withstand \
      what’s ahead.”',
      containerProps: {
        style: { backgroundColor: '#fff' }
      },
      order: 4,
      type: 'quote',
      typographyProps: {},
    },
    {
      order: 3,
      type: 'divider'
    },
    {
      order: 5,
      type: 'divider'
    },
    {
      content: <React.Fragment>The Vision <b>Must</b> Precede the Venture</React.Fragment>,
      order: 2,
      type: 'subtitle'
    },
    {
      content: 'A Different Kind of Business Plan',
      order: 1,
      type: 'title'
    },
    {
      src: '/videos/comp1.mp4',
      order: 0,
      type: 'video/mp4',
    },
    {
      src: './images/people-crosswalk.jpg',
      order: 6,
      type: 'image'
    }
  ],
  mission: 'Our mission is to empower every individual and business in the \
    known universe by optimizing and developing comprehensive \
    solutions; we strive to reshape industries for the good of \
    humanity.',
  slides: [
    {
      alignAll: 'left',
      headline: 'What We Do',
      content: <React.Fragment>
        Provide professional services and create cutting-edge solutions
        to meet the modern business’s basic need: <span style={{
          fontWeight: 900, color: '#015085'}}> agility</span>
      </React.Fragment>
    },
    {
      alignAll: 'right',
      headline: 'Opportunity #1',
      content: <React.Fragment>
        Businesses can’t find the individuals to fit the skillsets they
        need. Cue our <span style={{ fontWeight: 900, color: '#015085'}}>
        professional services</span>. Acquire talent, sell it, profit,
        repeat.
      </React.Fragment>
    },
    {
      alignAll: 'left',
      headline: 'Opportunity #2',
      content: <React.Fragment>
        Businesses end when they don’t have the technology to operate
        quickly and with agility. Cue our <span style={{ fontWeight: 900,
        color: '#015085'}}>product development</span>.
      </React.Fragment>
    },
    {
      alignAll: 'right',
      headline: "But what's the actual problem?",
      headlineProps: {
        align: 'center',
        style: { fontSize: 32 }
      },
      content: <React.Fragment>
        Companies across varying verticals are losing money to <span
        style={{ fontWeight: 900, color: '#015085'}}>broken process</span>,
        non-optimal solutions, and overly complex and fragmented systems.
      </React.Fragment>,
      contentProps: {
        align: 'right',
        style: { alignSelf: 'flex-end' }
      },
      subtitle: 'Process is the most important aspect of the corporate world. An ever-decreasing time to provide\ ' +
      'products and services to consumers is essential to remain competitive.',
      subtitleProps: {
        align: 'center',
        style: { fontWeight: 500 }
      }
    },
    {
      alignAll: 'left',
      headline: 'The shakeup',
      content: <React.Fragment>
        At titan.io, we solve the problem. By offering skilled people
        and expansive technological solutions, we allow businesses to
        operate more efficiently.
      </React.Fragment>
    }
  ]
};

export class BusinessPlan extends React.Component {
  renderDivider = (key) => {
    const { classes } = this.props;

    return <Divider key={key} />;
  };

  renderImage = (key, image) => {
    const { classes } = this.props;
    key = image._id || key;

    return (image.src) && <Grid container style={{
        backgroundImage: `url('${image.src}')`,
        backgroundPosition: 'center center',
        height: '300px',
        marginTop: 30
      }}>
    </Grid>;
  }

  renderQuote = (key, quote) => {
    const { classes } = this.props;
    key = quote._id || key;

    return (quote.text || quote.author) && (
      <Grid item key={key} className={classes.block} {...quote.containerProps}>
        {
          quote.text && <Typography
            align='center'
            className={classes.quote}
            {...quote.typographyProps}>
            { quote.text }
          </Typography>
        }
        {
          quote.author && <Typography
            align='center'
            className={classes.byline}
            {...quote.typographyProps}>
            { quote.author }
          </Typography>
        }
      </Grid>
    );
  }

  renderSubtitle = (key, subtitle) => {
    const { classes } = this.props;
    key = subtitle._id || key;

    return subtitle && <Typography
      align='center'
      className={classes.subtitle}
      component={Grid}
      container
      justify='center'
      key={key}
      variant='title'>
      { subtitle.content }
    </Typography>;
  };

  renderTitle = (key, title) => {
    const { classes } = this.props;
    key = title._id || key;

    return title && <Typography
      align='center'
      className={classes.title}
      component={Grid}
      container
      gutterBottom
      justify='center'
      key={key}
      variant='display2'>
      { title.content }
    </Typography>;
  };

  renderVideo = (key, video) => {
    const { classes } = this.props;
    key = video._id || key;

    return video && <Grid item key={key}>
      <video className={classes.video} controls width='100%' >
        <source { ...video }></source>
      </video>
    </Grid>;
  };

  getMethod = type => {
    type = type.substring(0, 5) === 'video' ? 'video' : type;
    return `render${type[0].toUpperCase()}${type.substring(1, type.length)}`
  };

  handleClick = e => {};

  render() {
    const { classes } = this.props;

    return <Grid
      alignItems='center'
      className={classes.root}
      container
      direction='column'>
      <Grid item md={8} xs={12}>
        {
          _.map(
            _.sortBy(data.items, item => item.order),
            (element, key) => (
              this[this.getMethod(element.type)](key, element)
            )
          )
        }

        <Grid
          alignItems='center'
          className={ classes.missionContainer }
          container
          justify='center'>
          <Typography
            align='center'
            className={`${classes.block} ${classes.missionText}`}
            component={Grid}
            item
            variant='body1'>
            { data.mission }
          </Typography>
        </Grid>

        {
          data.slides.map((slide, key) => <BusinessPlanSlide
            alignAll={ slide.alignAll || 'left' }
            headline={ slide.headline }
            headlineProps={ slide.headlineProps || {} }
            content={ slide.content }
            contentProps={ slide.contentProps || {} }
            key={ slide._id || key }
            subtitle={ slide.subtitle }
            subtitleProps={slide.subtitleProps || {} }
            {...slide} />
          )
        }
      </Grid>
    </Grid>;
  }
}

BusinessPlan.propTypes = {
  classes: PropTypes.object.isRequired
};

BusinessPlan.defaultProps = {
  classes: {}
};

export default withStyles(styles)(BusinessPlan);