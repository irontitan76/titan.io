import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    borderRadius: 0,
    marginBottom: theme.spacing.unit * 2.5,
    marginTop: theme.spacing.unit * 2
  },
  darkButton: {
    backgroundColor: '#777',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  footer: {
    position: 'absolute',
    bottom: '0'
  },
  input: {
    marginBottom: theme.spacing.unit * 2,
  },
  inputBase: {
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0px 9999px white'
    }
  },
  root: {
    marginTop: 65,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 10,
    padding: theme.spacing.unit * 4
  },
  title: {
    color: '#000',
    marginBottom: theme.spacing.unit * 2
  }
});

const data = {
  title: 'titan.io',
  subheading: 'Create an account',
  button0: 'Signup',
  button1: 'Back to login',
  privacyNotice: "By creating an account, you agree to titan.io's Conditions \
    of Use and Privacy Notice.",
  form: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Type your name...',
      required: true,
      type: 'text'
    },
    {
      label: 'Email address',
      name: 'email',
      placeholder: 'Type your email...',
      required: true,
      type: 'email'
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: 'At least 8 characters...',
      required: true,
      type: 'password'
    },
    {
      label: 'Repeat password',
      name: 'repeatPassword',
      placeholder: 'Match the above...',
      required: true,
      type: 'password'
    }
  ]
};

export class Signup extends React.Component {
  state = {
    error: '',
    isPasswordVisible: false,
    repeatPassword: '',
    password: '',
    username: '',
  };

  _onChange = e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  _onSubmit = e => {
    e.preventDefault();
    const { email, name, password, repeatPassword } = this.state;
    let isValid = false;

    // TODO: Need to validate user
    if ( name.length < 3 ) {
      this.setState({
        ...this.state,
        error: 'The name entered must be at least 3 characters'
      });
      return false;
    }

    if ( password.length < 8 ) {
      this.setState({
        ...this.state,
        error: 'The password must be at least 8 characters'
      });
      return false;
    }

    if ( password !== repeatPassword ) {
      this.setState({
        ...this.state,
        error: 'The passwords must match'
      });
      return false;
    }

    return Accounts.createUser({
      email: email.toLowerCase(),
      password,
      profile: {
        name
      }
    }, err => {
      if ( err ) {
        this.setState({
          error: err.reason
        });

        return false;
      } else {
        return this.props.history.push('/login');
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { error, isPasswordVisible } = this.state;

    return <Grid className={classes.root} container justify='center'>
      <Grid item md={6} lg={4} sm={8} xs={10}>
        <Paper className={classes.paper} elevation={1} square>
          <Typography
            align='center'
            className={classes.title}
            variant='display1'>
            { data.title }
          </Typography>
          <Typography
            align='center'
            className={classes.title}
            gutterBottom
            variant='subheading'>
            { data.subheading }
          </Typography>
          <form autoComplete='off' onSubmit={this._onSubmit}>
            <Grid container justify='space-between'>
              {
                data.form.map((field, key) => (
                  <FormControl
                    component={Grid}
                    item
                    fullWidth
                    key={`key__${key}`}
                    required={field.required}>
                    <InputLabel
                      htmlFor={field.name}>
                      {field.label}
                    </InputLabel>
                    <Input
                      autoFocus={key === 0}
                      className={classes.input}
                      error={!!error}
                      inputProps={{
                        className: classes.inputBase
                      }}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={this._onChange}
                      type={field.type !== 'password'
                        ? field.type : isPasswordVisible
                        ? 'text' : 'password' } />
                  </FormControl>
                ))
              }
            </Grid>
            <Typography color={ !!error ? 'error' : 'default' }>
              &nbsp;{ error }
            </Typography>
            <Button
              className={classes.button}
              color='primary'
              component={Link}
              fullWidth
              onClick={this._onSubmit}
              size='large'
              to='/login'
              type='submit'
              variant='raised'>
              { data.button0 }
            </Button>
            <Button
              className={`${classes.button} ${classes.darkButton}`}
              color='default'
              component={Link}
              fullWidth
              size='large'
              to='/login'
              type='button'
              variant='raised'>
              { data.button1 }
            </Button>
          </form>
          <Typography
            align='center'
            style={{ color: '#999' }}>
            { data.privacyNotice }
          </Typography>
        </Paper>
      </Grid>
    </Grid>;
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);