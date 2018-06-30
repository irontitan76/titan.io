import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';


import { ourStory } from './../common/manifests/manifest';
import Footer from './../common/components/Footer';

const styles = theme => ({
  banner: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 300
  },
  faIcon: {
    margin: '20px 0'
  },
  slide: {
    backgroundImage: 'url("./images/camp3-1x.webp")',
    backgroundSize: 'cover',
    height: 675
  },
  slideContent: {
    color: theme.palette.common.white
  },
  slideHeadline: {
    color: theme.palette.common.white,
    fontWeight: 300
  },
  slideInnerContainer: {
    backgroundColor: 'rgba(0,0,0,.8)',
    margin: 50,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      textAlign: 'center'
    }
  },
  storyContainer: {
    marginTop: 20,
    padding: theme.spacing.unit * 4
  },
  storyContent: {
    fontWeight: 300
  },
  storyTitle: {

  },
  tab: {
    paddingBottom: 16,
    textTransform: 'none'
  },
  tabDescription: {
    fontWeight: 300
  },
  valContainer: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`
  },
  valContent: {
    fontWeight: 300,
    marginTop: 20
  },
  valSubtitle: {

  },
  valTitle: {
    marginTop: 30
  }
});

const data = {
  slides: [
    {
      content: 'Our mission is to empower every individual and business in \
        the known universe by optimizing and developing comprehensive \
        solutions; we strive to reshape industries for the good of humanity',
      headline: 'We believe in making our universe better',
    }
  ],
  story: {
    content: ourStory,
    title: 'Our story',
  },
  values: [
    {
      brief: 'Approach innovation with a structured thought process',
      content: 'By pushing the boundaries of technology through questioning, \
        self-motivation, and problem solving, you are an innovator at heart. \
        Each innovator at heart is relentless in his or her journey from \
        ideation to production.',
      icon: 'cogs',
      subtitle: 'What does it mean to be an innovator at heart?',
      title: 'Innovators at heart',
    },
    {
      brief: 'Anticipate and respond to opportunities to improve',
      content: 'It means you take action. Get projects and solutions \
        completed efficiently. You spend more time executing, learning, and \
        improving. You encourage and require those around you to think \
        strategically, but act quickly.',
      icon: 'clock',
      subtitle: 'What does it mean to have a bias for action?',
      title: 'Bias for action',
    },
    {
      brief: 'Generate ideas that challenge the status quo',
      content: 'Challenge ideas so that better ones are borne from them. \
        This means that here at titan, we understand that improvement can \
        always happen and our work is never done. Every person is open to \
        challenges and because of that, innovation is spurred.',
      icon: 'flag',
      subtitle: 'What does it mean to challenge respectfully?',
      title: 'Challenge respectfully',
    },
    {
      brief: 'Every moment is an opportunity to improve lives',
      content: 'Integrity is paramount at titan.io. We believe in compassion \
        and that is what brings people together, inspires people to win, and \
        accelerates humanity forward.',
      icon: 'hands-heart',
      subtitle: 'What does it mean to be compassionate?',
      title: 'Be compassionate',
    },
    {
      brief: 'Form meaningful relationships and produce results together',
      content: 'We are a company full of caring, creative, brilliant people, \
        and we put our heart and soul into everything we do. We value \
        effectiveness and will always improve upon improving.',
      icon: 'cubes',
      subtitle: 'What does it mean to collaborate efficiently?',
      title: 'Collaborate efficiently',
    }
  ]
};

export class Values extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, width } = this.props;

    const scrollableTab = {
      xs: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
    };

    return <Grid container justify='center'>
      <Grid alignItems='center' className={classes.slide} container>

        <Grid className={classes.slideInnerContainer} item md={6} sm={10} xs={12}>
          <Grid container>
            <Typography
              className={classes.slideHeadline}
              component={Grid}
              gutterBottom
              item
              variant='display2'
              xs={12}>
              {data.slides[0].headline}
            </Typography>

            <Typography
              className={classes.slideContent}
              component={Grid}
              item
              variant='body2'
              xs={12}>
              {data.slides[0].content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <Tabs
            centered={!scrollableTab[width]}
            indicatorColor='primary'
            onChange={this.handleChange}
            scrollable={scrollableTab[width]}
            scrollButtons={scrollableTab[width] ? 'auto' : null}
            textColor='primary'
            value={this.state.value}>
            {
              data.values.map((val, key) => <Tab
                className={classes.tab}
                key={`key__${key}`}
                label={
                  <React.Fragment>

                    <Icon>
                      <FontAwesomeIcon
                        className={classes.faIcon}
                        icon={[ 'fal', val.icon ]}
                        size='sm' />
                    </Icon>

                    <Typography variant='subheading'>
                      {val.title}
                    </Typography>

                    <Typography
                      className={classes.tabDescription}
                      variant='body1'>
                      {val.brief}
                    </Typography>

                  </React.Fragment>
                } />)
            }
          </Tabs>
        </Paper>
        {
          data.values.map((val, key) => (this.state.value === key
            && <Grid
              alignItems='center'
              className={classes.valContainer}
              container
              direction='column'
              key={`key__${key}`}>

              <Typography
                align='center'
                className={classes.valTitle}
                variant='headline'>
                {val.title}
              </Typography>

              <Typography
                align='center'
                className={classes.valSubtitle}
                gutterBottom
                variant='subheading'>
                {val.subtitle}
              </Typography>

              <Typography
                align='center'
                className={classes.valContent}
                component={Grid}
                item
                md={8}
                paragraph
                xs={12}>
                {val.content}
              </Typography>

            </Grid>
          ))
        }
      </Grid>

      <Grid item xs={12}>
        <div
          className={classes.banner}
          style={{
            backgroundImage: 'url(./images/water1.jpg)',
          }} />
      </Grid>

      <Grid item xs={12}>
        <Grid
          alignItems='flex-start'
          className={classes.storyContainer}
          container
          direction='column'>

          <Typography
            align='center'
            className={classes.storyTitle}
            gutterBottom
            variant='display1'>
            {data.story.title}
          </Typography>

          <Typography
            align='left'
            className={classes.storyContent}
            component={Grid}
            item
            md={6}
            paragraph
            xs={12}>
            {data.story.content}
          </Typography>

        </Grid>
      </Grid>

      <Footer title='titan.io' />
    </Grid>;
  }
}

Values.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true })
)(Values);